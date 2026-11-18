import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeJagged: ForwardRefExoticComponent<BadgeJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgeJagged;
export { BadgeJagged };
