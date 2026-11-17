import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutGridImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutGridImage: ForwardRefExoticComponent<LayoutGridImageProps & RefAttributes<SVGSVGElement>>;

export default LayoutGridImage;
export { LayoutGridImage };
