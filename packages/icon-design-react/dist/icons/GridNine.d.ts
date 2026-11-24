import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridNineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GridNine: ForwardRefExoticComponent<GridNineProps & RefAttributes<SVGSVGElement>>;

export default GridNine;
export { GridNine };
