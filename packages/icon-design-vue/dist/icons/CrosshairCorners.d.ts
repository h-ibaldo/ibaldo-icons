import type { DefineComponent } from 'vue';

export interface CrosshairCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CrosshairCorners: DefineComponent<CrosshairCornersProps>;

export default CrosshairCorners;
export { CrosshairCorners };
