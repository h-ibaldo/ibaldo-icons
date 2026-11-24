import type { DefineComponent } from 'vue';

export interface ChevronRightSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronRightSmall: DefineComponent<ChevronRightSmallProps>;

export default ChevronRightSmall;
export { ChevronRightSmall };
