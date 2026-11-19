import type { DefineComponent } from 'vue';

export interface ChevronUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronUp: DefineComponent<ChevronUpProps>;

export default ChevronUp;
export { ChevronUp };
