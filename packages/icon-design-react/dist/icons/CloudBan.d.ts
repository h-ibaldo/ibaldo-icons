import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudBan: ForwardRefExoticComponent<CloudBanProps & RefAttributes<SVGSVGElement>>;

export default CloudBan;
export { CloudBan };
