import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenTwoFingersSwipeDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenTwoFingersSwipeDown: ForwardRefExoticComponent<TouchScreenTwoFingersSwipeDownProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenTwoFingersSwipeDown;
export { TouchScreenTwoFingersSwipeDown };
