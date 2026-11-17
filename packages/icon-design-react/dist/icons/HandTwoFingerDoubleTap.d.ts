import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingerDoubleTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingerDoubleTap: ForwardRefExoticComponent<HandTwoFingerDoubleTapProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingerDoubleTap;
export { HandTwoFingerDoubleTap };
