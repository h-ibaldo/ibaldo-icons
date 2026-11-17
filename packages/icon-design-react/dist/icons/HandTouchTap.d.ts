import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchTap: ForwardRefExoticComponent<HandTouchTapProps & RefAttributes<SVGSVGElement>>;

export default HandTouchTap;
export { HandTouchTap };
