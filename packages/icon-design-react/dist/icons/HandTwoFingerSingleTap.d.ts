import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingerSingleTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingerSingleTap: ForwardRefExoticComponent<HandTwoFingerSingleTapProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingerSingleTap;
export { HandTwoFingerSingleTap };
