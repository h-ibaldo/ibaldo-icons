import type { DefineComponent } from 'vue';

export interface WindowPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPlusCircle: DefineComponent<WindowPlusCircleProps>;

export default WindowPlusCircle;
export { WindowPlusCircle };
