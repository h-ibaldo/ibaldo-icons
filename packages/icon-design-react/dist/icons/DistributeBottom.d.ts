import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeBottom: ForwardRefExoticComponent<DistributeBottomProps & RefAttributes<SVGSVGElement>>;

export default DistributeBottom;
export { DistributeBottom };
