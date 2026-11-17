import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowArrowUpPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowArrowUpPlain: ForwardRefExoticComponent<WindowArrowUpPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowArrowUpPlain;
export { WindowArrowUpPlain };
