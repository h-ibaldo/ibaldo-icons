import type { DefineComponent } from 'vue';

export interface RotateScreenBezelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RotateScreenBezel: DefineComponent<RotateScreenBezelProps>;

export default RotateScreenBezel;
export { RotateScreenBezel };
