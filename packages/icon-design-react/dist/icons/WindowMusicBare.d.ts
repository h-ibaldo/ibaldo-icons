import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowMusicBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowMusicBare: ForwardRefExoticComponent<WindowMusicBareProps & RefAttributes<SVGSVGElement>>;

export default WindowMusicBare;
export { WindowMusicBare };
