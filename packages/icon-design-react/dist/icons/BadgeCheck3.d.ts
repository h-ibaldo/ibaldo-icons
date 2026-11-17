import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheck3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck3: ForwardRefExoticComponent<BadgeCheck3Props & RefAttributes<SVGSVGElement>>;

export default BadgeCheck3;
export { BadgeCheck3 };
