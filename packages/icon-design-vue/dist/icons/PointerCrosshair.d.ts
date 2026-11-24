import type { DefineComponent } from 'vue';

export interface PointerCrosshairProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PointerCrosshair: DefineComponent<PointerCrosshairProps>;

export default PointerCrosshair;
export { PointerCrosshair };
