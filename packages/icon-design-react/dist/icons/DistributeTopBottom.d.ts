import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeTopBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeTopBottom: ForwardRefExoticComponent<DistributeTopBottomProps & RefAttributes<SVGSVGElement>>;

export default DistributeTopBottom;
export { DistributeTopBottom };
