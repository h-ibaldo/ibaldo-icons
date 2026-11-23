import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GalleryThumbnailsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GalleryThumbnails: ForwardRefExoticComponent<GalleryThumbnailsProps & RefAttributes<SVGSVGElement>>;

export default GalleryThumbnails;
export { GalleryThumbnails };
