import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CaretLeftRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CaretLeftRightSquare: ForwardRefExoticComponent<CaretLeftRightSquareProps & RefAttributes<SVGSVGElement>>;

export default CaretLeftRightSquare;
export { CaretLeftRightSquare };
