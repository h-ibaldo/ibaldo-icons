import type { DefineComponent } from 'vue';

export interface SprayCanBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SprayCanBare: DefineComponent<SprayCanBareProps>;

export default SprayCanBare;
export { SprayCanBare };
