import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AsteriskSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AsteriskSquare: ForwardRefExoticComponent<AsteriskSquareProps & RefAttributes<SVGSVGElement>>;

export default AsteriskSquare;
export { AsteriskSquare };
