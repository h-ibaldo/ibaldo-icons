import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripBarsHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripBarsHorizontal: ForwardRefExoticComponent<GripBarsHorizontalProps & RefAttributes<SVGSVGElement>>;

export default GripBarsHorizontal;
export { GripBarsHorizontal };
