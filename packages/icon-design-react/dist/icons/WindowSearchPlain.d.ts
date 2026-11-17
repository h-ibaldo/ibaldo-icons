import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSearchPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSearchPlain: ForwardRefExoticComponent<WindowSearchPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowSearchPlain;
export { WindowSearchPlain };
