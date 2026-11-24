import type { DefineComponent } from 'vue';

export interface CropOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropOff: DefineComponent<CropOffProps>;

export default CropOff;
export { CropOff };
