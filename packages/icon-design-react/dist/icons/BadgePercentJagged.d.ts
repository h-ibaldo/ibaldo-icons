import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgePercentJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgePercentJagged: ForwardRefExoticComponent<BadgePercentJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgePercentJagged;
export { BadgePercentJagged };
