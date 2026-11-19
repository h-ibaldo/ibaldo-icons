import type { DefineComponent } from 'vue';

export interface AtAlertCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtAlertCircle: DefineComponent<AtAlertCircleProps>;

export default AtAlertCircle;
export { AtAlertCircle };
