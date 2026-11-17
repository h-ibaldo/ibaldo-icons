import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRefreshSecondProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRefreshSecond: ForwardRefExoticComponent<CloudRefreshSecondProps & RefAttributes<SVGSVGElement>>;

export default CloudRefreshSecond;
export { CloudRefreshSecond };
