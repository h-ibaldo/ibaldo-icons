import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalWeatherProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalWeather: ForwardRefExoticComponent<WebsitePortalWeatherProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalWeather;
export { WebsitePortalWeather };
