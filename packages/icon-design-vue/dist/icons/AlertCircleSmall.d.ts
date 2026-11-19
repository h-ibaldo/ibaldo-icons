import type { DefineComponent } from 'vue';

export interface AlertCircleSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertCircleSmall: DefineComponent<AlertCircleSmallProps>;

export default AlertCircleSmall;
export { AlertCircleSmall };
