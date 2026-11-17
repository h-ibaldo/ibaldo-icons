import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSync: ForwardRefExoticComponent<CloudSyncProps & RefAttributes<SVGSVGElement>>;

export default CloudSync;
export { CloudSync };
