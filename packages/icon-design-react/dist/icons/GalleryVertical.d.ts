import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GalleryVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GalleryVertical: ForwardRefExoticComponent<GalleryVerticalProps & RefAttributes<SVGSVGElement>>;

export default GalleryVertical;
export { GalleryVertical };
