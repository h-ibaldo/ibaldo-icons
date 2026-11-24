import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropMarksThreeLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropMarksThreeLines: ForwardRefExoticComponent<CropMarksThreeLinesProps & RefAttributes<SVGSVGElement>>;

export default CropMarksThreeLines;
export { CropMarksThreeLines };
