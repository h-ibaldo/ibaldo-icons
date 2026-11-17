import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowGrid: ForwardRefExoticComponent<WindowGridProps & RefAttributes<SVGSVGElement>>;

export default WindowGrid;
export { WindowGrid };
