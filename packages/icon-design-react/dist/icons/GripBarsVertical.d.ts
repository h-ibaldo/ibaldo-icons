import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripBarsVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripBarsVertical: ForwardRefExoticComponent<GripBarsVerticalProps & RefAttributes<SVGSVGElement>>;

export default GripBarsVertical;
export { GripBarsVertical };
