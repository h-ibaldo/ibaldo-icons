import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowListPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowListPlain: ForwardRefExoticComponent<WindowListPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowListPlain;
export { WindowListPlain };
