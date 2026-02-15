import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WallpaperPictureDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WallpaperPictureDashed: ForwardRefExoticComponent<WallpaperPictureDashedProps & RefAttributes<SVGSVGElement>>;

export default WallpaperPictureDashed;
export { WallpaperPictureDashed };
