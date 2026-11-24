import type { DefineComponent } from 'vue';

export interface CrosshairRingProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrosshairRing: DefineComponent<CrosshairRingProps>;

export default CrosshairRing;
export { CrosshairRing };
