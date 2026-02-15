import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalLawScaleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalLawScale: ForwardRefExoticComponent<WebsitePortalLawScaleProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalLawScale;
export { WebsitePortalLawScale };
