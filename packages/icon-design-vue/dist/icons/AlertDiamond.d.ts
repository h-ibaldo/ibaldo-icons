import type { DefineComponent } from 'vue';

export interface AlertDiamondProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertDiamond: DefineComponent<AlertDiamondProps>;

export default AlertDiamond;
export { AlertDiamond };
