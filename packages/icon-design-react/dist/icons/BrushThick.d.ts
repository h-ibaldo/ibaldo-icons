import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrushThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrushThick: ForwardRefExoticComponent<BrushThickProps & RefAttributes<SVGSVGElement>>;

export default BrushThick;
export { BrushThick };
