import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMinusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMinusPlain: ForwardRefExoticComponent<WindowMinusPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowMinusPlain;
export { WindowMinusPlain };
