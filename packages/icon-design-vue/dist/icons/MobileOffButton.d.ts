import type { DefineComponent } from 'vue';

export interface MobileOffButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileOffButton: DefineComponent<MobileOffButtonProps>;

export default MobileOffButton;
export { MobileOffButton };
