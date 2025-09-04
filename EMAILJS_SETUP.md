# EmailJS 配置说明

## 当前配置状态

✅ **已配置完成** - 项目已经使用了实际的 EmailJS 配置，无需额外设置。

## 当前使用的配置

- **Public Key**: `46VvyhfbARd-xquRP`
- **Service ID**: `service_jpgcb3k`
- **通知邮件模板**: `template_gu9gonb` (发送给 hanyao.li@bravozoom.io)
- **确认邮件模板**: `template_yh56n3l` (发送给客户，包含 Calendly 链接)

## 邮件流程

1. **用户提交表单** → 触发双邮件发送
2. **通知邮件** → 发送给 Bravo Zoom 团队 (hanyao.li@bravozoom.io)
3. **确认邮件** → 发送给客户，包含 Calendly 预约链接

## 邮件模板参数

### 通知邮件模板 (template_gu9gonb)
```
to_email: hanyao.li@bravozoom.io
from_name: {{用户姓名}}
from_company: {{公司名称}}
from_email: {{用户邮箱}}
message: {{用户消息}}
subject: New Consultation Request - Bravo Zoom
```

### 确认邮件模板 (template_yh56n3l)
```
to_email: {{用户邮箱}}
customer_name: {{用户姓名}}
calendly_link: https://calendly.com/hanyao-li-bravozoom/30min
subject: Thank you for your interest in Bravo Zoom
```

## 测试功能

1. 启动开发服务器：`npm run dev`
2. 填写联系表单并提交
3. 检查以下邮箱：
   - hanyao.li@bravozoom.io (应该收到通知邮件)
   - 用户填写的邮箱 (应该收到确认邮件和 Calendly 链接)

## 注意事项

- 配置已硬编码在代码中，无需环境变量
- EmailJS 免费账户每月有 200 封邮件的限制
- 确保在 EmailJS 控制台中设置正确的域名白名单
- 生产环境中，建议使用付费计划以获得更好的可靠性
