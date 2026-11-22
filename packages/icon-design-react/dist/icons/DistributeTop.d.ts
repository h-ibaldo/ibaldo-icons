import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DistributeTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DistributeTop: ForwardRefExoticComponent<DistributeTopProps & RefAttributes<SVGSVGElement>>;

export default DistributeTop;
export { DistributeTop };
