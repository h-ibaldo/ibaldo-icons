import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlain: ForwardRefExoticComponent<WindowPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowPlain;
export { WindowPlain };
