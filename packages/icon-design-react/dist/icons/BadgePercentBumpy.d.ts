import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgePercentBumpyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgePercentBumpy: ForwardRefExoticComponent<BadgePercentBumpyProps & RefAttributes<SVGSVGElement>>;

export default BadgePercentBumpy;
export { BadgePercentBumpy };
