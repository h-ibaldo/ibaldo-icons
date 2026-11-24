import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCodePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCodePlain: ForwardRefExoticComponent<WindowCodePlainProps & RefAttributes<SVGSVGElement>>;

export default WindowCodePlain;
export { WindowCodePlain };
