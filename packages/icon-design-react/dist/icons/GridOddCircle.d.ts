import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridOddCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GridOddCircle: ForwardRefExoticComponent<GridOddCircleProps & RefAttributes<SVGSVGElement>>;

export default GridOddCircle;
export { GridOddCircle };
