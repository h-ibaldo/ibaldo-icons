import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalHeart: ForwardRefExoticComponent<WebsitePortalHeartProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalHeart;
export { WebsitePortalHeart };
