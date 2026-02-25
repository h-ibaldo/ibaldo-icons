import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WallpaperPictureFramed2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WallpaperPictureFramed2: ForwardRefExoticComponent<WallpaperPictureFramed2Props & RefAttributes<SVGSVGElement>>;

export default WallpaperPictureFramed2;
export { WallpaperPictureFramed2 };
