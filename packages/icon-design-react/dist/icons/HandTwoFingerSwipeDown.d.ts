import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingerSwipeDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingerSwipeDown: ForwardRefExoticComponent<HandTwoFingerSwipeDownProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingerSwipeDown;
export { HandTwoFingerSwipeDown };
