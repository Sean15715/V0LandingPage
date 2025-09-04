import emailjs from '@emailjs/browser';

// 备用邮件发送方法（使用 mailto 链接）
export const sendEmailFallback = (formData: ContactFormData): void => {
  const subject = encodeURIComponent('New Consultation Request - Bravo Zoom');
  const body = encodeURIComponent(`
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Message: ${formData.message || 'No additional message provided.'}
  `);
  
  const mailtoLink = `mailto:hanyao.li@bravozoom.io?subject=${subject}&body=${body}`;
  window.open(mailtoLink, '_blank');
};

// EmailJS 配置 - 使用实际的配置值
const EMAILJS_PUBLIC_KEY = '46VvyhfbARd-xquRP';
const EMAILJS_SERVICE_ID = 'service_jpgcb3k';
const NOTIFICATION_TEMPLATE_ID = 'template_gu9gonb'; // 通知邮件模板
const CONFIRMATION_TEMPLATE_ID = 'template_yh56n3l'; // 确认邮件模板

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message?: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // 检查是否在浏览器环境中
    if (typeof window === 'undefined') {
      throw new Error('EmailJS can only be used in browser environment');
    }

    // 初始化 EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // 准备通知邮件参数（发送给 Bravo Zoom 团队）
    const notificationParams = {
      to_email: 'hanyao.li@bravozoom.io',
      from_name: formData.name,
      from_company: formData.company,
      from_email: formData.email,
      message: formData.message || 'No additional message provided.',
      subject: 'New Consultation Request - Bravo Zoom'
    };

    // 准备确认邮件参数（发送给客户）
    const customerParams = {
      to_email: formData.email,
      customer_name: formData.name,
      calendly_link: 'https://calendly.com/hanyao-li-bravozoom/30min',
      subject: 'Thank you for your interest in Bravo Zoom'
    };

    console.log('Sending notification email...', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: NOTIFICATION_TEMPLATE_ID,
      params: notificationParams
    });

    // 发送通知邮件给团队
    const notificationResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      NOTIFICATION_TEMPLATE_ID,
      notificationParams
    );

    console.log('Notification sent!', notificationResponse.status, notificationResponse.text);

    console.log('Sending confirmation email...', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: CONFIRMATION_TEMPLATE_ID,
      params: customerParams
    });

    // 发送确认邮件给客户
    const confirmationResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      CONFIRMATION_TEMPLATE_ID,
      customerParams
    );

    console.log('Confirmation sent!', confirmationResponse.status, confirmationResponse.text);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    
    // 提供更详细的错误信息
    let errorMessage = 'Failed to send email. Please try again.';
    
    if (error instanceof Error) {
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Network error. Please check your internet connection and try again.';
      } else if (error.message.includes('Invalid email')) {
        errorMessage = 'Invalid email address. Please check your email and try again.';
      } else if (error.message.includes('Service not found')) {
        errorMessage = 'Email service configuration error. Please contact support.';
      } else {
        errorMessage = error.message;
      }
    }
    
    return { success: false, error: errorMessage };
  }
};

// 验证表单数据
export const validateFormData = (formData: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.company.trim()) {
    errors.push('Company name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  return errors;
};
