import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintbrushStrokeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintbrushStroke: ForwardRefExoticComponent<PaintbrushStrokeProps & RefAttributes<SVGSVGElement>>;

export default PaintbrushStroke;
export { PaintbrushStroke };
