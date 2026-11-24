import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ImageFramelessProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ImageFrameless: ForwardRefExoticComponent<ImageFramelessProps & RefAttributes<SVGSVGElement>>;

export default ImageFrameless;
export { ImageFrameless };
