import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotEqualSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotEqualSquare: ForwardRefExoticComponent<NotEqualSquareProps & RefAttributes<SVGSVGElement>>;

export default NotEqualSquare;
export { NotEqualSquare };
