import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintbrushVerticalDippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintbrushVerticalDipped: ForwardRefExoticComponent<PaintbrushVerticalDippedProps & RefAttributes<SVGSVGElement>>;

export default PaintbrushVerticalDipped;
export { PaintbrushVerticalDipped };
