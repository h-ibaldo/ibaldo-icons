import type { DefineComponent } from 'vue';

export interface WindowSearchDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowSearchDots: DefineComponent<WindowSearchDotsProps>;

export default WindowSearchDots;
export { WindowSearchDots };
