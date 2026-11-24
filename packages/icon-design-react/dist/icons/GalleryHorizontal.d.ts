import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GalleryHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GalleryHorizontal: ForwardRefExoticComponent<GalleryHorizontalProps & RefAttributes<SVGSVGElement>>;

export default GalleryHorizontal;
export { GalleryHorizontal };
