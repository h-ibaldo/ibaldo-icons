import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutLargeImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutLargeImage: ForwardRefExoticComponent<LayoutLargeImageProps & RefAttributes<SVGSVGElement>>;

export default LayoutLargeImage;
export { LayoutLargeImage };
