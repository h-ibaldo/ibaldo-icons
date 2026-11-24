import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PercentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Percent: ForwardRefExoticComponent<PercentProps & RefAttributes<SVGSVGElement>>;

export default Percent;
export { Percent };
