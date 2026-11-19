import type { DefineComponent } from 'vue';

export interface MailPaperclipProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailPaperclip: DefineComponent<MailPaperclipProps>;

export default MailPaperclip;
export { MailPaperclip };
