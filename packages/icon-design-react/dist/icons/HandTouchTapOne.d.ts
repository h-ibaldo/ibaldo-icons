import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchTapOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchTapOne: ForwardRefExoticComponent<HandTouchTapOneProps & RefAttributes<SVGSVGElement>>;

export default HandTouchTapOne;
export { HandTouchTapOne };
