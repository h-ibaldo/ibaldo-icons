import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck: ForwardRefExoticComponent<BadgeCheckProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheck;
export { BadgeCheck };
