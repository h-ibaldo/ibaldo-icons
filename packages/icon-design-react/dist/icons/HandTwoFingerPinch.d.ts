import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingerPinchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingerPinch: ForwardRefExoticComponent<HandTwoFingerPinchProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingerPinch;
export { HandTwoFingerPinch };
