import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageSquareDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageSquareDashed: ForwardRefExoticComponent<ImageSquareDashedProps & RefAttributes<SVGSVGElement>>;

export default ImageSquareDashed;
export { ImageSquareDashed };
