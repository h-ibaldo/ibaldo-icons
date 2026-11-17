import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalShoeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalShoe: ForwardRefExoticComponent<WebsitePortalShoeProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalShoe;
export { WebsitePortalShoe };
