import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSyncCornerTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSyncCornerTall: ForwardRefExoticComponent<CloudSyncCornerTallProps & RefAttributes<SVGSVGElement>>;

export default CloudSyncCornerTall;
export { CloudSyncCornerTall };
