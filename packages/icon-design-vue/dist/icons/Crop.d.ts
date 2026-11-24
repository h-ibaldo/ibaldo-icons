import type { DefineComponent } from 'vue';

export interface CropProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Crop: DefineComponent<CropProps>;

export default Crop;
export { Crop };
