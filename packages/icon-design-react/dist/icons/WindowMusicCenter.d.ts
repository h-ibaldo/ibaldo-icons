import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMusicCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMusicCenter: ForwardRefExoticComponent<WindowMusicCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowMusicCenter;
export { WindowMusicCenter };
