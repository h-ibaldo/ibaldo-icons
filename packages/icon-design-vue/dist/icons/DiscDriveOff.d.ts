import type { DefineComponent } from 'vue';

export interface DiscDriveOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiscDriveOff: DefineComponent<DiscDriveOffProps>;

export default DiscDriveOff;
export { DiscDriveOff };
