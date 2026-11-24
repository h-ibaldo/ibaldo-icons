import type { DefineComponent } from 'vue';

export interface TrendUpDownSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrendUpDownSmall: DefineComponent<TrendUpDownSmallProps>;

export default TrendUpDownSmall;
export { TrendUpDownSmall };
