import type { DefineComponent } from 'vue';

export interface TrendDownSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrendDownSmall: DefineComponent<TrendDownSmallProps>;

export default TrendDownSmall;
export { TrendDownSmall };
