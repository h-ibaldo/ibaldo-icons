import type { DefineComponent } from 'vue';

export interface MobileVolumeButtonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileVolumeButton: DefineComponent<MobileVolumeButtonProps>;

export default MobileVolumeButton;
export { MobileVolumeButton };
