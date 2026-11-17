import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalScaleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalScale: ForwardRefExoticComponent<WebsitePortalScaleProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalScale;
export { WebsitePortalScale };
