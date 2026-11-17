import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMusicCenterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMusicCenterBare: ForwardRefExoticComponent<WindowMusicCenterBareProps & RefAttributes<SVGSVGElement>>;

export default WindowMusicCenterBare;
export { WindowMusicCenterBare };
