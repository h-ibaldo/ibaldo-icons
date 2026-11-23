import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgePercentJaggedRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgePercentJaggedRound: ForwardRefExoticComponent<BadgePercentJaggedRoundProps & RefAttributes<SVGSVGElement>>;

export default BadgePercentJaggedRound;
export { BadgePercentJaggedRound };
