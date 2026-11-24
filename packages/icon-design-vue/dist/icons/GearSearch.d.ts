import type { DefineComponent } from 'vue';

export interface GearSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSearch: DefineComponent<GearSearchProps>;

export default GearSearch;
export { GearSearch };
