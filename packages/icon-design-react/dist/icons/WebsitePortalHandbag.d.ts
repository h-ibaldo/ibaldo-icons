import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalHandbagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalHandbag: ForwardRefExoticComponent<WebsitePortalHandbagProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalHandbag;
export { WebsitePortalHandbag };
