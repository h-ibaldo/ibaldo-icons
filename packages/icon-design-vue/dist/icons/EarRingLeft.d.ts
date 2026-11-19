import type { DefineComponent } from 'vue';

export interface EarRingLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EarRingLeft: DefineComponent<EarRingLeftProps>;

export default EarRingLeft;
export { EarRingLeft };
