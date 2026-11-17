import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowGlobePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowGlobePlain: ForwardRefExoticComponent<WindowGlobePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowGlobePlain;
export { WindowGlobePlain };
