import type { DefineComponent } from 'vue';

export interface WidgetXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WidgetX: DefineComponent<WidgetXProps>;

export default WidgetX;
export { WidgetX };
