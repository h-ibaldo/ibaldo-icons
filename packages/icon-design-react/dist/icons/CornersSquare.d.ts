import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CornersSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CornersSquare: ForwardRefExoticComponent<CornersSquareProps & RefAttributes<SVGSVGElement>>;

export default CornersSquare;
export { CornersSquare };
