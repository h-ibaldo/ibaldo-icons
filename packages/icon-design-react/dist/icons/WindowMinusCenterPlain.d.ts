import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMinusCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMinusCenterPlain: ForwardRefExoticComponent<WindowMinusCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowMinusCenterPlain;
export { WindowMinusCenterPlain };
