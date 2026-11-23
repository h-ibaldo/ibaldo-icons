import type { DefineComponent } from 'vue';

export interface MailClockFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailClockFolds: DefineComponent<MailClockFoldsProps>;

export default MailClockFolds;
export { MailClockFolds };
