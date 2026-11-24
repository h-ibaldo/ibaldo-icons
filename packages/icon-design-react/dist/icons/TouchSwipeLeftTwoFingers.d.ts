import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeLeftTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeLeftTwoFingers: ForwardRefExoticComponent<TouchSwipeLeftTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeLeftTwoFingers;
export { TouchSwipeLeftTwoFingers };
