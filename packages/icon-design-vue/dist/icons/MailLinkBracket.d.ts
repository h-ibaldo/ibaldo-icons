import type { DefineComponent } from 'vue';

export interface MailLinkBracketProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailLinkBracket: DefineComponent<MailLinkBracketProps>;

export default MailLinkBracket;
export { MailLinkBracket };
