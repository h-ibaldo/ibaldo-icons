import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShapeUnevenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShapeUneven: ForwardRefExoticComponent<ShapeUnevenProps & RefAttributes<SVGSVGElement>>;

export default ShapeUneven;
export { ShapeUneven };
