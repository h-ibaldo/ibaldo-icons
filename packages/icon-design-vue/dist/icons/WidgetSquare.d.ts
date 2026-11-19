import type { DefineComponent } from 'vue';

export interface WidgetSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetSquare: DefineComponent<WidgetSquareProps>;

export default WidgetSquare;
export { WidgetSquare };
