import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaintbrushVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaintbrushVertical: ForwardRefExoticComponent<PaintbrushVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaintbrushVertical;
export { PaintbrushVertical };
