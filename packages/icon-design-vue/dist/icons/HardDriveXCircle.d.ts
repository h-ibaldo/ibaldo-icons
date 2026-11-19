import type { DefineComponent } from 'vue';

export interface HardDriveXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HardDriveXCircle: DefineComponent<HardDriveXCircleProps>;

export default HardDriveXCircle;
export { HardDriveXCircle };
