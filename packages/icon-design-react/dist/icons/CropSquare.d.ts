import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CropSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CropSquare: ForwardRefExoticComponent<CropSquareProps & RefAttributes<SVGSVGElement>>;

export default CropSquare;
export { CropSquare };
