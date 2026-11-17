import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BurstProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Burst: ForwardRefExoticComponent<BurstProps & RefAttributes<SVGSVGElement>>;

export default Burst;
export { Burst };
