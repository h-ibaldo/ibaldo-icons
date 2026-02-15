import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SequenceRectanglesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SequenceRectangles: ForwardRefExoticComponent<SequenceRectanglesProps & RefAttributes<SVGSVGElement>>;

export default SequenceRectangles;
export { SequenceRectangles };
