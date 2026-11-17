import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSyncCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSyncCorner: ForwardRefExoticComponent<CloudSyncCornerProps & RefAttributes<SVGSVGElement>>;

export default CloudSyncCorner;
export { CloudSyncCorner };
