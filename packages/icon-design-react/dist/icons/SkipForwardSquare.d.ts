import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForwardSquare: ForwardRefExoticComponent<SkipForwardSquareProps & RefAttributes<SVGSVGElement>>;

export default SkipForwardSquare;
export { SkipForwardSquare };
