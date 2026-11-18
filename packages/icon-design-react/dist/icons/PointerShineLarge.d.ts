import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerShineLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerShineLarge: ForwardRefExoticComponent<PointerShineLargeProps & RefAttributes<SVGSVGElement>>;

export default PointerShineLarge;
export { PointerShineLarge };
