import type { DefineComponent } from 'vue';

export interface DiscDriveXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DiscDriveX: DefineComponent<DiscDriveXProps>;

export default DiscDriveX;
export { DiscDriveX };
