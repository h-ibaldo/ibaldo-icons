import type { DefineComponent } from 'vue';

export interface WidgetWifiDotsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetWifiDotsSquare: DefineComponent<WidgetWifiDotsSquareProps>;

export default WidgetWifiDotsSquare;
export { WidgetWifiDotsSquare };
