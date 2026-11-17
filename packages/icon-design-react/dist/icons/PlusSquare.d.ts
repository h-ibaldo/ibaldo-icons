import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusSquare: ForwardRefExoticComponent<PlusSquareProps & RefAttributes<SVGSVGElement>>;

export default PlusSquare;
export { PlusSquare };
