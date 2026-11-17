import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTouchOneFingerWaitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTouchOneFingerWait: ForwardRefExoticComponent<HandTouchOneFingerWaitProps & RefAttributes<SVGSVGElement>>;

export default HandTouchOneFingerWait;
export { HandTouchOneFingerWait };
