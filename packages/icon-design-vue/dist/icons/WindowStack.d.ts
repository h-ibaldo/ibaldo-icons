import type { DefineComponent } from 'vue';

export interface WindowStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowStack: DefineComponent<WindowStackProps>;

export default WindowStack;
export { WindowStack };
