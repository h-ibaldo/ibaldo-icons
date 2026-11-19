import type { DefineComponent } from 'vue';

export interface ChevronUpSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronUpSmall: DefineComponent<ChevronUpSmallProps>;

export default ChevronUpSmall;
export { ChevronUpSmall };
