import type { DefineComponent } from 'vue';

export interface WidgetDotsSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetDotsSquare: DefineComponent<WidgetDotsSquareProps>;

export default WidgetDotsSquare;
export { WidgetDotsSquare };
