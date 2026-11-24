import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShapeNestedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShapeNested: ForwardRefExoticComponent<ShapeNestedProps & RefAttributes<SVGSVGElement>>;

export default ShapeNested;
export { ShapeNested };
