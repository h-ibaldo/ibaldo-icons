import type { DefineComponent } from 'vue';

export interface ClockSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClockSearch: DefineComponent<ClockSearchProps>;

export default ClockSearch;
export { ClockSearch };
