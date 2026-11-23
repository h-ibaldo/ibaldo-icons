import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintCanSpillProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintCanSpill: ForwardRefExoticComponent<PaintCanSpillProps & RefAttributes<SVGSVGElement>>;

export default PaintCanSpill;
export { PaintCanSpill };
