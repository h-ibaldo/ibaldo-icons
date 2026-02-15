import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WallpaperPictureFramedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WallpaperPictureFramed: ForwardRefExoticComponent<WallpaperPictureFramedProps & RefAttributes<SVGSVGElement>>;

export default WallpaperPictureFramed;
export { WallpaperPictureFramed };
