import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchSwipeLeftLineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchSwipeLeftLine: ForwardRefExoticComponent<HandTouchSwipeLeftLineProps & RefAttributes<SVGSVGElement>>;

export default HandTouchSwipeLeftLine;
export { HandTouchSwipeLeftLine };
