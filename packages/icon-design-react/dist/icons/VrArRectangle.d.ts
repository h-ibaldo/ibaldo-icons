import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VrArRectangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VrArRectangle: ForwardRefExoticComponent<VrArRectangleProps & RefAttributes<SVGSVGElement>>;

export default VrArRectangle;
export { VrArRectangle };
