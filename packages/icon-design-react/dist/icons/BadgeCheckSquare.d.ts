import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheckSquare: ForwardRefExoticComponent<BadgeCheckSquareProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheckSquare;
export { BadgeCheckSquare };
