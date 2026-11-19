import type { DefineComponent } from 'vue';

export interface ChevronDownSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDownSmall: DefineComponent<ChevronDownSmallProps>;

export default ChevronDownSmall;
export { ChevronDownSmall };
