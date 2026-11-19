import type { DefineComponent } from 'vue';

export interface HardDriveXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HardDriveX: DefineComponent<HardDriveXProps>;

export default HardDriveX;
export { HardDriveX };
