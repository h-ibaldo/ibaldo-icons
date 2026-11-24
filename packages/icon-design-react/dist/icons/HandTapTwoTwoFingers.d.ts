import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapTwoTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapTwoTwoFingers: ForwardRefExoticComponent<HandTapTwoTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandTapTwoTwoFingers;
export { HandTapTwoTwoFingers };
