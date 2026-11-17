import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpTrayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpTray: ForwardRefExoticComponent<ArrowUpTrayProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpTray;
export { ArrowUpTray };
