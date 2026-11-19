import type { DefineComponent } from 'vue';

export interface AtCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCorners: DefineComponent<AtCornersProps>;

export default AtCorners;
export { AtCorners };
