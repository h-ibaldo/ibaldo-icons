import type { DefineComponent } from 'vue';

export interface ChevronOutCornersProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronOutCorners: DefineComponent<ChevronOutCornersProps>;

export default ChevronOutCorners;
export { ChevronOutCorners };
