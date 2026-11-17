import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudLinkAltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudLinkAlt: ForwardRefExoticComponent<CloudLinkAltProps & RefAttributes<SVGSVGElement>>;

export default CloudLinkAlt;
export { CloudLinkAlt };
