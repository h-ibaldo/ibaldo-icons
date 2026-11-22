import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GalleryTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GalleryTop: ForwardRefExoticComponent<GalleryTopProps & RefAttributes<SVGSVGElement>>;

export default GalleryTop;
export { GalleryTop };
