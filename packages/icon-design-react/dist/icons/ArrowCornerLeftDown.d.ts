import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCornerLeftDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCornerLeftDown: ForwardRefExoticComponent<ArrowCornerLeftDownProps & RefAttributes<SVGSVGElement>>;

export default ArrowCornerLeftDown;
export { ArrowCornerLeftDown };
