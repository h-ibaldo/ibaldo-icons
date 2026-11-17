import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3DownloadAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3DownloadAlt: ForwardRefExoticComponent<Cloud3DownloadAltProps & RefAttributes<SVGSVGElement>>;

export default Cloud3DownloadAlt;
export { Cloud3DownloadAlt };
