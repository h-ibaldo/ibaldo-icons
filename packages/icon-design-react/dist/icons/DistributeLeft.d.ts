import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeLeft: ForwardRefExoticComponent<DistributeLeftProps & RefAttributes<SVGSVGElement>>;

export default DistributeLeft;
export { DistributeLeft };
