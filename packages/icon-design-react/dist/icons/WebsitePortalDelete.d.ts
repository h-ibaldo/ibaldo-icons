import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalDeleteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalDelete: ForwardRefExoticComponent<WebsitePortalDeleteProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalDelete;
export { WebsitePortalDelete };
