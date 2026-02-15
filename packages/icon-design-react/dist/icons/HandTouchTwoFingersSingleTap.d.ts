import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchTwoFingersSingleTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchTwoFingersSingleTap: ForwardRefExoticComponent<HandTouchTwoFingersSingleTapProps & RefAttributes<SVGSVGElement>>;

export default HandTouchTwoFingersSingleTap;
export { HandTouchTwoFingersSingleTap };
