import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalCompassProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalCompass: ForwardRefExoticComponent<WebsitePortalCompassProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalCompass;
export { WebsitePortalCompass };
