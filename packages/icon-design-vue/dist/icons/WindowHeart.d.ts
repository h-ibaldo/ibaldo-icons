import type { DefineComponent } from 'vue';

export interface WindowHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowHeart: DefineComponent<WindowHeartProps>;

export default WindowHeart;
export { WindowHeart };
