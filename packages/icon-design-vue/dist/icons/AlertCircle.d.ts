import type { DefineComponent } from 'vue';

export interface AlertCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlertCircle: DefineComponent<AlertCircleProps>;

export default AlertCircle;
export { AlertCircle };
