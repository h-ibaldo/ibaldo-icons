import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalDatingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalDating: ForwardRefExoticComponent<WebsitePortalDatingProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalDating;
export { WebsitePortalDating };
