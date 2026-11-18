import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListCheckCirclePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListCheckCirclePlain: ForwardRefExoticComponent<WindowListCheckCirclePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListCheckCirclePlain;
export { WindowListCheckCirclePlain };
