import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalMoviesFilmProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalMoviesFilm: ForwardRefExoticComponent<WebsitePortalMoviesFilmProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalMoviesFilm;
export { WebsitePortalMoviesFilm };
