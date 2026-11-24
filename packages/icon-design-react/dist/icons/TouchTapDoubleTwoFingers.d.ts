import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchTapDoubleTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchTapDoubleTwoFingers: ForwardRefExoticComponent<TouchTapDoubleTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default TouchTapDoubleTwoFingers;
export { TouchTapDoubleTwoFingers };
