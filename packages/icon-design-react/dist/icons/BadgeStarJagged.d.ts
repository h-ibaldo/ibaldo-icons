import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeStarJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeStarJagged: ForwardRefExoticComponent<BadgeStarJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgeStarJagged;
export { BadgeStarJagged };
