import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCheckCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCheckCirclePlain: ForwardRefExoticComponent<WindowCheckCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowCheckCirclePlain;
export { WindowCheckCirclePlain };
