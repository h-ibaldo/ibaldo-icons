import type { DefineComponent } from 'vue';

export interface MobileHeartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileHeart: DefineComponent<MobileHeartProps>;

export default MobileHeart;
export { MobileHeart };
