import type { DefineComponent } from 'vue';

export interface LinkMinusFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkMinusFlat: DefineComponent<LinkMinusFlatProps>;

export default LinkMinusFlat;
export { LinkMinusFlat };
