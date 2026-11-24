import type { DefineComponent } from 'vue';

export interface WidgetWifiSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetWifiSquare: DefineComponent<WidgetWifiSquareProps>;

export default WidgetWifiSquare;
export { WidgetWifiSquare };
