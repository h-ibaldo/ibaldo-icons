import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeRightTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeRightTwoFingers: ForwardRefExoticComponent<TouchSwipeRightTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeRightTwoFingers;
export { TouchSwipeRightTwoFingers };
