import type { DefineComponent } from 'vue';

export interface TrayStackHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrayStackHeart: DefineComponent<TrayStackHeartProps>;

export default TrayStackHeart;
export { TrayStackHeart };
