import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalBlossomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalBlossom: ForwardRefExoticComponent<WebsitePortalBlossomProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalBlossom;
export { WebsitePortalBlossom };
