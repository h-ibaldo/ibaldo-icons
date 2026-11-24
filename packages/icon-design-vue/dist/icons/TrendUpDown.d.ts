import type { DefineComponent } from 'vue';

export interface TrendUpDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrendUpDown: DefineComponent<TrendUpDownProps>;

export default TrendUpDown;
export { TrendUpDown };
