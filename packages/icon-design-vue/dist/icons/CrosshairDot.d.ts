import type { DefineComponent } from 'vue';

export interface CrosshairDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrosshairDot: DefineComponent<CrosshairDotProps>;

export default CrosshairDot;
export { CrosshairDot };
