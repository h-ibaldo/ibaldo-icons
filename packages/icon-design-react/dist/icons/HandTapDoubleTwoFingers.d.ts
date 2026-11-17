import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapDoubleTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapDoubleTwoFingers: ForwardRefExoticComponent<HandTapDoubleTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandTapDoubleTwoFingers;
export { HandTapDoubleTwoFingers };
