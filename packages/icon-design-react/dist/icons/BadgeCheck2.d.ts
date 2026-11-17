import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheck2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck2: ForwardRefExoticComponent<BadgeCheck2Props & RefAttributes<SVGSVGElement>>;

export default BadgeCheck2;
export { BadgeCheck2 };
