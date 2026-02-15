import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WebsitePortalMoviesCameraProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WebsitePortalMoviesCamera: ForwardRefExoticComponent<WebsitePortalMoviesCameraProps & RefAttributes<SVGSVGElement>>;

export default WebsitePortalMoviesCamera;
export { WebsitePortalMoviesCamera };
