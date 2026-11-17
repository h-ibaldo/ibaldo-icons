import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLink: ForwardRefExoticComponent<CloudLinkProps & RefAttributes<SVGSVGElement>>;

export default CloudLink;
export { CloudLink };
