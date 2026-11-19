import type { DefineComponent } from 'vue';

export interface AtCornersCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCornersCompact: DefineComponent<AtCornersCompactProps>;

export default AtCornersCompact;
export { AtCornersCompact };
