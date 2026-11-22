import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeRight: ForwardRefExoticComponent<DistributeRightProps & RefAttributes<SVGSVGElement>>;

export default DistributeRight;
export { DistributeRight };
