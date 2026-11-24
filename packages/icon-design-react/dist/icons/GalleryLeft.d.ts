import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GalleryLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GalleryLeft: ForwardRefExoticComponent<GalleryLeftProps & RefAttributes<SVGSVGElement>>;

export default GalleryLeft;
export { GalleryLeft };
