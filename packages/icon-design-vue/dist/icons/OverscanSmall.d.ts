import type { DefineComponent } from 'vue';

export interface OverscanSmallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OverscanSmall: DefineComponent<OverscanSmallProps>;

export default OverscanSmall;
export { OverscanSmall };
