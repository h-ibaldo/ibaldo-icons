import type { DefineComponent } from 'vue';

export interface MailLinkSlantedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailLinkSlanted: DefineComponent<MailLinkSlantedProps>;

export default MailLinkSlanted;
export { MailLinkSlanted };
