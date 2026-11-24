import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeCenterVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeCenterVertical: ForwardRefExoticComponent<DistributeCenterVerticalProps & RefAttributes<SVGSVGElement>>;

export default DistributeCenterVertical;
export { DistributeCenterVertical };
