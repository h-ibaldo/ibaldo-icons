import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchOneFingerMoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchOneFingerMove: ForwardRefExoticComponent<HandTouchOneFingerMoveProps & RefAttributes<SVGSVGElement>>;

export default HandTouchOneFingerMove;
export { HandTouchOneFingerMove };
