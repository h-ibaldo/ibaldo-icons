import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DivideSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DivideSquare: ForwardRefExoticComponent<DivideSquareProps & RefAttributes<SVGSVGElement>>;

export default DivideSquare;
export { DivideSquare };
