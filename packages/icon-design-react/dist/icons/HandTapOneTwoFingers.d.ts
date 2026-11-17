import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapOneTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapOneTwoFingers: ForwardRefExoticComponent<HandTapOneTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandTapOneTwoFingers;
export { HandTapOneTwoFingers };
