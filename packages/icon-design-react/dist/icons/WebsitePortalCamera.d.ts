import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalCameraProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalCamera: ForwardRefExoticComponent<WebsitePortalCameraProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalCamera;
export { WebsitePortalCamera };
