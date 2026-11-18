import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListMinusPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListMinusPlain: ForwardRefExoticComponent<WindowListMinusPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListMinusPlain;
export { WindowListMinusPlain };
