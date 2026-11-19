import type { DefineComponent } from 'vue';

export interface CropDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropDashed: DefineComponent<CropDashedProps>;

export default CropDashed;
export { CropDashed };
