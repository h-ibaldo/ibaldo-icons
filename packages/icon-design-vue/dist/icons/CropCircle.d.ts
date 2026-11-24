import type { DefineComponent } from 'vue';

export interface CropCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropCircle: DefineComponent<CropCircleProps>;

export default CropCircle;
export { CropCircle };
