import type { DefineComponent } from 'vue';

export interface OverscanLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const OverscanLeftRight: DefineComponent<OverscanLeftRightProps>;

export default OverscanLeftRight;
export { OverscanLeftRight };
