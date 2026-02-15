import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchOneFingerTapSingleTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchOneFingerTapSingleTap: ForwardRefExoticComponent<HandTouchOneFingerTapSingleTapProps & RefAttributes<SVGSVGElement>>;

export default HandTouchOneFingerTapSingleTap;
export { HandTouchOneFingerTapSingleTap };
