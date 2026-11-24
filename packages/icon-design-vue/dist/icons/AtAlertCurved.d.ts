import type { DefineComponent } from 'vue';

export interface AtAlertCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtAlertCurved: DefineComponent<AtAlertCurvedProps>;

export default AtAlertCurved;
export { AtAlertCurved };
