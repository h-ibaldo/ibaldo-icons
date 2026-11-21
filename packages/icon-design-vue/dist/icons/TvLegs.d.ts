import type { DefineComponent } from 'vue';

export interface TvLegsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TvLegs: DefineComponent<TvLegsProps>;

export default TvLegs;
export { TvLegs };
