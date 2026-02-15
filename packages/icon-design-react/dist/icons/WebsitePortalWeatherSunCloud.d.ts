import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalWeatherSunCloudProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalWeatherSunCloud: ForwardRefExoticComponent<WebsitePortalWeatherSunCloudProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalWeatherSunCloud;
export { WebsitePortalWeatherSunCloud };
