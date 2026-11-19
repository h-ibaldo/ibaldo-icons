import type { DefineComponent } from 'vue';

export interface MailPaperclipRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailPaperclipRound: DefineComponent<MailPaperclipRoundProps>;

export default MailPaperclipRound;
export { MailPaperclipRound };
