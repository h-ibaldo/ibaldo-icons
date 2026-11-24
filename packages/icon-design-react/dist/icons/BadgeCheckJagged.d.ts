import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheckJagged: ForwardRefExoticComponent<BadgeCheckJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheckJagged;
export { BadgeCheckJagged };
