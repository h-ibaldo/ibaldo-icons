import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalShieldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalShield: ForwardRefExoticComponent<WebsitePortalShieldProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalShield;
export { WebsitePortalShield };
