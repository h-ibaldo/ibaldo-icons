import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheckPointed: ForwardRefExoticComponent<BadgeCheckPointedProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheckPointed;
export { BadgeCheckPointed };
