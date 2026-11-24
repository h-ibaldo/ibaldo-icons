import type { DefineComponent } from 'vue';

export interface BellAlertProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellAlert: DefineComponent<BellAlertProps>;

export default BellAlert;
export { BellAlert };
