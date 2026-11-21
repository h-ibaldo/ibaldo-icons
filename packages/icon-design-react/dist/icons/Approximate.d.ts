import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApproximateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Approximate: ForwardRefExoticComponent<ApproximateProps & RefAttributes<SVGSVGElement>>;

export default Approximate;
export { Approximate };
