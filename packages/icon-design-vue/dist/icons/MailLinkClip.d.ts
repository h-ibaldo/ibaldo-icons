import type { DefineComponent } from 'vue';

export interface MailLinkClipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailLinkClip: DefineComponent<MailLinkClipProps>;

export default MailLinkClip;
export { MailLinkClip };
