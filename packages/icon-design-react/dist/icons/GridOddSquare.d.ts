import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GridOddSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GridOddSquare: ForwardRefExoticComponent<GridOddSquareProps & RefAttributes<SVGSVGElement>>;

export default GridOddSquare;
export { GridOddSquare };
