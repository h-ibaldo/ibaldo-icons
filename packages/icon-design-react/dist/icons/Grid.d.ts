import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Grid: ForwardRefExoticComponent<GridProps & RefAttributes<SVGSVGElement>>;

export default Grid;
export { Grid };
