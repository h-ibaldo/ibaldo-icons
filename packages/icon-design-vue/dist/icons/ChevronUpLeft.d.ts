import type { DefineComponent } from 'vue';

export interface ChevronUpLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronUpLeft: DefineComponent<ChevronUpLeftProps>;

export default ChevronUpLeft;
export { ChevronUpLeft };
