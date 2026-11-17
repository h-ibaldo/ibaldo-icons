import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageCurveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageCurve: ForwardRefExoticComponent<ImageCurveProps & RefAttributes<SVGSVGElement>>;

export default ImageCurve;
export { ImageCurve };
