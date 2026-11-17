import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ShapeMixProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ShapeMix: ForwardRefExoticComponent<ShapeMixProps & RefAttributes<SVGSVGElement>>;

export default ShapeMix;
export { ShapeMix };
