import type { DefineComponent } from 'vue';

export interface ToggleMiddleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ToggleMiddle: DefineComponent<ToggleMiddleProps>;

export default ToggleMiddle;
export { ToggleMiddle };
