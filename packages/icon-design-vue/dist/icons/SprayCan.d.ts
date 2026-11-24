import type { DefineComponent } from 'vue';

export interface SprayCanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SprayCan: DefineComponent<SprayCanProps>;

export default SprayCan;
export { SprayCan };
