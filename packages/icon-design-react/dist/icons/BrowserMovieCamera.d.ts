import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserMovieCameraProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserMovieCamera: ForwardRefExoticComponent<BrowserMovieCameraProps & RefAttributes<SVGSVGElement>>;

export default BrowserMovieCamera;
export { BrowserMovieCamera };
