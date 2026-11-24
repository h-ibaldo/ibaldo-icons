import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerUpRightSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerUpRightSquare: ForwardRefExoticComponent<PointerUpRightSquareProps & RefAttributes<SVGSVGElement>>;

export default PointerUpRightSquare;
export { PointerUpRightSquare };
