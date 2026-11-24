import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VectorSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VectorSquare: ForwardRefExoticComponent<VectorSquareProps & RefAttributes<SVGSVGElement>>;

export default VectorSquare;
export { VectorSquare };
