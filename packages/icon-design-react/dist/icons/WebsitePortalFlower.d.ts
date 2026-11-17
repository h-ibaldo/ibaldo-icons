import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalFlowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalFlower: ForwardRefExoticComponent<WebsitePortalFlowerProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalFlower;
export { WebsitePortalFlower };
