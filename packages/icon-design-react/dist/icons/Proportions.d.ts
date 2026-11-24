import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProportionsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Proportions: ForwardRefExoticComponent<ProportionsProps & RefAttributes<SVGSVGElement>>;

export default Proportions;
export { Proportions };
