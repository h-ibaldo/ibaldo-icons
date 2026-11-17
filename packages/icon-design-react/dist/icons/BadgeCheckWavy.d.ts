import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheckWavy: ForwardRefExoticComponent<BadgeCheckWavyProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheckWavy;
export { BadgeCheckWavy };
