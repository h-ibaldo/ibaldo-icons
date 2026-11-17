import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeUpTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeUpTwoFingers: ForwardRefExoticComponent<TouchSwipeUpTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeUpTwoFingers;
export { TouchSwipeUpTwoFingers };
