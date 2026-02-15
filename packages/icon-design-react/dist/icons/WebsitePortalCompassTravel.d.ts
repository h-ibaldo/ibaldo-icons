import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalCompassTravelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalCompassTravel: ForwardRefExoticComponent<WebsitePortalCompassTravelProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalCompassTravel;
export { WebsitePortalCompassTravel };
