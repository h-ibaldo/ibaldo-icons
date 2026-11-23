import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrushProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Brush: ForwardRefExoticComponent<BrushProps & RefAttributes<SVGSVGElement>>;

export default Brush;
export { Brush };
