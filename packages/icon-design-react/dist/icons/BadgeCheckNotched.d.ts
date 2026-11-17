import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeCheckNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeCheckNotched: ForwardRefExoticComponent<BadgeCheckNotchedProps & RefAttributes<SVGSVGElement>>;

export default BadgeCheckNotched;
export { BadgeCheckNotched };
