import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinusSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MinusSquare: ForwardRefExoticComponent<MinusSquareProps & RefAttributes<SVGSVGElement>>;

export default MinusSquare;
export { MinusSquare };
