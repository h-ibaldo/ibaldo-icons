import type { DefineComponent } from 'vue';

export interface CropMarksThreeLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropMarksThreeLines: DefineComponent<CropMarksThreeLinesProps>;

export default CropMarksThreeLines;
export { CropMarksThreeLines };
