import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutListImage: ForwardRefExoticComponent<LayoutListImageProps & RefAttributes<SVGSVGElement>>;

export default LayoutListImage;
export { LayoutListImage };
