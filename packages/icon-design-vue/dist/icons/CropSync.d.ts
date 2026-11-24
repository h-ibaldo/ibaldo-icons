import type { DefineComponent } from 'vue';

export interface CropSyncProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropSync: DefineComponent<CropSyncProps>;

export default CropSync;
export { CropSync };
