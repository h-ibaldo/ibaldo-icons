import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSearchBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSearchBare: ForwardRefExoticComponent<WindowSearchBareProps & RefAttributes<SVGSVGElement>>;

export default WindowSearchBare;
export { WindowSearchBare };
