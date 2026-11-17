import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquaresFourGrid2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquaresFourGrid2: ForwardRefExoticComponent<SquaresFourGrid2Props & RefAttributes<SVGSVGElement>>;

export default SquaresFourGrid2;
export { SquaresFourGrid2 };
