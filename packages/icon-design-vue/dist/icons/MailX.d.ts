import type { DefineComponent } from 'vue';

export interface MailXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailX: DefineComponent<MailXProps>;

export default MailX;
export { MailX };
