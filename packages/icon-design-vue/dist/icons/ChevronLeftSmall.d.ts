import type { DefineComponent } from 'vue';

export interface ChevronLeftSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronLeftSmall: DefineComponent<ChevronLeftSmallProps>;

export default ChevronLeftSmall;
export { ChevronLeftSmall };
