import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchTapSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchTapSquare: ForwardRefExoticComponent<HandTouchTapSquareProps & RefAttributes<SVGSVGElement>>;

export default HandTouchTapSquare;
export { HandTouchTapSquare };
