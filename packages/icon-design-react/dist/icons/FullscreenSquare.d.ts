import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FullscreenSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FullscreenSquare: ForwardRefExoticComponent<FullscreenSquareProps & RefAttributes<SVGSVGElement>>;

export default FullscreenSquare;
export { FullscreenSquare };
