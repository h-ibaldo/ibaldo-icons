import type { DefineComponent } from 'vue';

export interface EarRingRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EarRingRight: DefineComponent<EarRingRightProps>;

export default EarRingRight;
export { EarRingRight };
