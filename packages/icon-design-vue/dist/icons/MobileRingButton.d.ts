import type { DefineComponent } from 'vue';

export interface MobileRingButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileRingButton: DefineComponent<MobileRingButtonProps>;

export default MobileRingButton;
export { MobileRingButton };
