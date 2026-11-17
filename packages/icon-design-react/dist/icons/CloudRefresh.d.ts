import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRefreshProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRefresh: ForwardRefExoticComponent<CloudRefreshProps & RefAttributes<SVGSVGElement>>;

export default CloudRefresh;
export { CloudRefresh };
