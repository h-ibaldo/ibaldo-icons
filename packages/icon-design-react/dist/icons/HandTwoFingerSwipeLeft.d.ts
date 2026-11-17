import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingerSwipeLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingerSwipeLeft: ForwardRefExoticComponent<HandTwoFingerSwipeLeftProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingerSwipeLeft;
export { HandTwoFingerSwipeLeft };
