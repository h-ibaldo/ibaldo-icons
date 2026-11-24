import type { DefineComponent } from 'vue';

export interface WidgetDotsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetDotsCircle: DefineComponent<WidgetDotsCircleProps>;

export default WidgetDotsCircle;
export { WidgetDotsCircle };
