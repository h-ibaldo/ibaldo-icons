import type { DefineComponent } from 'vue';

export interface SunFacetedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunFaceted: DefineComponent<SunFacetedProps>;

export default SunFaceted;
export { SunFaceted };
