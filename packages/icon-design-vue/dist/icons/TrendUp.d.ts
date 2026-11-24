import type { DefineComponent } from 'vue';

export interface TrendUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TrendUp: DefineComponent<TrendUpProps>;

export default TrendUp;
export { TrendUp };
