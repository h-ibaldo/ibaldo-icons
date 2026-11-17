import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudArrowSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudArrowSync: ForwardRefExoticComponent<CloudArrowSyncProps & RefAttributes<SVGSVGElement>>;

export default CloudArrowSync;
export { CloudArrowSync };
