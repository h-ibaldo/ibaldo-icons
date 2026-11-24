import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeDownTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeDownTwoFingers: ForwardRefExoticComponent<TouchSwipeDownTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeDownTwoFingers;
export { TouchSwipeDownTwoFingers };
