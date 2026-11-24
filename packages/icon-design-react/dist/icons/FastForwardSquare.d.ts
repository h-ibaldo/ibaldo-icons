import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FastForwardSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FastForwardSquare: ForwardRefExoticComponent<FastForwardSquareProps & RefAttributes<SVGSVGElement>>;

export default FastForwardSquare;
export { FastForwardSquare };
