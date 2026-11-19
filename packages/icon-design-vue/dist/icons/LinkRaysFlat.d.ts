import type { DefineComponent } from 'vue';

export interface LinkRaysFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LinkRaysFlat: DefineComponent<LinkRaysFlatProps>;

export default LinkRaysFlat;
export { LinkRaysFlat };
