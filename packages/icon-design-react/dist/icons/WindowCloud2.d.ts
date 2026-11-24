import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCloud2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCloud2: ForwardRefExoticComponent<WindowCloud2Props & RefAttributes<SVGSVGElement>>;

export default WindowCloud2;
export { WindowCloud2 };
