import type { DefineComponent } from 'vue';

export interface MailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Mail: DefineComponent<MailProps>;

export default Mail;
export { Mail };
