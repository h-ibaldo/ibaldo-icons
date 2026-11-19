import type { DefineComponent } from 'vue';

export interface CropArrowBendProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropArrowBend: DefineComponent<CropArrowBendProps>;

export default CropArrowBend;
export { CropArrowBend };
