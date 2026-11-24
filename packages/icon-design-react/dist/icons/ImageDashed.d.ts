import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageDashed: ForwardRefExoticComponent<ImageDashedProps & RefAttributes<SVGSVGElement>>;

export default ImageDashed;
export { ImageDashed };
