import type { DefineComponent } from 'vue';

export interface RatioOneToOneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RatioOneToOne: DefineComponent<RatioOneToOneProps>;

export default RatioOneToOne;
export { RatioOneToOne };
