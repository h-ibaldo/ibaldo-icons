import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeLeftRight: ForwardRefExoticComponent<DistributeLeftRightProps & RefAttributes<SVGSVGElement>>;

export default DistributeLeftRight;
export { DistributeLeftRight };
