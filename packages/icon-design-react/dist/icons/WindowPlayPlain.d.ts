import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlayPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlayPlain: ForwardRefExoticComponent<WindowPlayPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowPlayPlain;
export { WindowPlayPlain };
