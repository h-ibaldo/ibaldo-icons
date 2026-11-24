import type { DefineComponent } from 'vue';

export interface WindowArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowArrowUp: DefineComponent<WindowArrowUpProps>;

export default WindowArrowUp;
export { WindowArrowUp };
