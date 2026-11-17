import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerLeftUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerLeftUp: ForwardRefExoticComponent<ArrowCornerLeftUpProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerLeftUp;
export { ArrowCornerLeftUp };
