import type { DefineComponent } from 'vue';

export interface WidgetCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetCircle: DefineComponent<WidgetCircleProps>;

export default WidgetCircle;
export { WidgetCircle };
