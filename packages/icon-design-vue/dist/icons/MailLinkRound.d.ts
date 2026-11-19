import type { DefineComponent } from 'vue';

export interface MailLinkRoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailLinkRound: DefineComponent<MailLinkRoundProps>;

export default MailLinkRound;
export { MailLinkRound };
