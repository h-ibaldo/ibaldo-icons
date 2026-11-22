import type { DefineComponent } from 'vue';

export interface TrendDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrendDown: DefineComponent<TrendDownProps>;

export default TrendDown;
export { TrendDown };
