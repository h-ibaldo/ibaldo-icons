import type { DefineComponent } from 'vue';

export interface MobileBoltButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileBoltButton: DefineComponent<MobileBoltButtonProps>;

export default MobileBoltButton;
export { MobileBoltButton };
