import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheck4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck4: ForwardRefExoticComponent<BadgeCheck4Props & RefAttributes<SVGSVGElement>>;

export default BadgeCheck4;
export { BadgeCheck4 };
