import type { DefineComponent } from 'vue';

export interface MobileButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileButton: DefineComponent<MobileButtonProps>;

export default MobileButton;
export { MobileButton };
