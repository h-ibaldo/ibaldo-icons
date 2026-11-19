import type { DefineComponent } from 'vue';

export interface MinusSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MinusSmall: DefineComponent<MinusSmallProps>;

export default MinusSmall;
export { MinusSmall };
