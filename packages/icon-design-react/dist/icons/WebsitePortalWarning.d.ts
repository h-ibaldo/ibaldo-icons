import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalWarningProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalWarning: ForwardRefExoticComponent<WebsitePortalWarningProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalWarning;
export { WebsitePortalWarning };
