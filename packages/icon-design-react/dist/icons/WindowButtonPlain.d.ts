import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowButtonPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowButtonPlain: ForwardRefExoticComponent<WindowButtonPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowButtonPlain;
export { WindowButtonPlain };
