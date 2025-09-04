import { useState } from 'react';
import { ContactFormData, sendEmail, sendEmailFallback, validateFormData } from '@/lib/emailService';

export interface UseContactFormReturn {
  formData: ContactFormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  setFormData: (data: ContactFormData) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleFallbackSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 重置状态
    setError(null);
    setIsSuccess(false);
    
    // 验证表单数据
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      setError(validationErrors.join(', '));
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setIsSuccess(true);
        // 清空表单
        setFormData({
          name: '',
          company: '',
          email: '',
          message: '',
        });
      } else {
        setError(result.error || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单数据
    const validationErrors = validateFormData(formData);
    if (validationErrors.length > 0) {
      setError(validationErrors.join(', '));
      return;
    }

    // 使用备用邮件方法
    sendEmailFallback(formData);
    setIsSuccess(true);
    
    // 清空表单
    setFormData({
      name: '',
      company: '',
      email: '',
      message: '',
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      message: '',
    });
    setError(null);
    setIsSuccess(false);
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    setFormData,
    handleSubmit,
    handleFallbackSubmit,
    resetForm,
  };
};
