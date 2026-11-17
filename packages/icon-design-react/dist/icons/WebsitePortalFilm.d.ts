import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalFilmProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalFilm: ForwardRefExoticComponent<WebsitePortalFilmProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalFilm;
export { WebsitePortalFilm };
