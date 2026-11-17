import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageWide: ForwardRefExoticComponent<ImageWideProps & RefAttributes<SVGSVGElement>>;

export default ImageWide;
export { ImageWide };
