import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropMarksSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropMarksSquare: ForwardRefExoticComponent<CropMarksSquareProps & RefAttributes<SVGSVGElement>>;

export default CropMarksSquare;
export { CropMarksSquare };
