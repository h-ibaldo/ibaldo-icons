import type { DefineComponent } from 'vue';

export interface PinSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PinSearch: DefineComponent<PinSearchProps>;

export default PinSearch;
export { PinSearch };
