import type { DefineComponent } from 'vue';

export interface TvProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Tv: DefineComponent<TvProps>;

export default Tv;
export { Tv };
