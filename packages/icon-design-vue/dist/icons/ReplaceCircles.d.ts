import type { DefineComponent } from 'vue';

export interface ReplaceCirclesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ReplaceCircles: DefineComponent<ReplaceCirclesProps>;

export default ReplaceCircles;
export { ReplaceCircles };
