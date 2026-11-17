import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheck6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck6: ForwardRefExoticComponent<BadgeCheck6Props & RefAttributes<SVGSVGElement>>;

export default BadgeCheck6;
export { BadgeCheck6 };
