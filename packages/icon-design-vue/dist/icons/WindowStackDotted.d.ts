import type { DefineComponent } from 'vue';

export interface WindowStackDottedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStackDotted: DefineComponent<WindowStackDottedProps>;

export default WindowStackDotted;
export { WindowStackDotted };
