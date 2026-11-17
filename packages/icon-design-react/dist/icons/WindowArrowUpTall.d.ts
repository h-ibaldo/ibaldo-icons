import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowArrowUpTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowArrowUpTall: ForwardRefExoticComponent<WindowArrowUpTallProps & RefAttributes<SVGSVGElement>>;

export default WindowArrowUpTall;
export { WindowArrowUpTall };
