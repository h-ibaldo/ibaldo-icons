import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheck7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheck7: ForwardRefExoticComponent<BadgeCheck7Props & RefAttributes<SVGSVGElement>>;

export default BadgeCheck7;
export { BadgeCheck7 };
