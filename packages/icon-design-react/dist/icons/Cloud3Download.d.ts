import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3DownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3Download: ForwardRefExoticComponent<Cloud3DownloadProps & RefAttributes<SVGSVGElement>>;

export default Cloud3Download;
export { Cloud3Download };
