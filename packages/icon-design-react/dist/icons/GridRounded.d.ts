import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GridRounded: ForwardRefExoticComponent<GridRoundedProps & RefAttributes<SVGSVGElement>>;

export default GridRounded;
export { GridRounded };
