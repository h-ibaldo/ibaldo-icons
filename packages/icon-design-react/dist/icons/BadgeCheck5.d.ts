import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheck5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck5: ForwardRefExoticComponent<BadgeCheck5Props & RefAttributes<SVGSVGElement>>;

export default BadgeCheck5;
export { BadgeCheck5 };
