import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapSquare: ForwardRefExoticComponent<HandTapSquareProps & RefAttributes<SVGSVGElement>>;

export default HandTapSquare;
export { HandTapSquare };
