import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquaresFourGrid1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquaresFourGrid1: ForwardRefExoticComponent<SquaresFourGrid1Props & RefAttributes<SVGSVGElement>>;

export default SquaresFourGrid1;
export { SquaresFourGrid1 };
