import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GridCircle: ForwardRefExoticComponent<GridCircleProps & RefAttributes<SVGSVGElement>>;

export default GridCircle;
export { GridCircle };
