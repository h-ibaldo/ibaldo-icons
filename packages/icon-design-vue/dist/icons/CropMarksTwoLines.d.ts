import type { DefineComponent } from 'vue';

export interface CropMarksTwoLinesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CropMarksTwoLines: DefineComponent<CropMarksTwoLinesProps>;

export default CropMarksTwoLines;
export { CropMarksTwoLines };
