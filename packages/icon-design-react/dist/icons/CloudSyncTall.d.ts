import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSyncTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSyncTall: ForwardRefExoticComponent<CloudSyncTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSyncTall;
export { CloudSyncTall };
