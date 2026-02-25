import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SequenceRectangles2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SequenceRectangles2: ForwardRefExoticComponent<SequenceRectangles2Props & RefAttributes<SVGSVGElement>>;

export default SequenceRectangles2;
export { SequenceRectangles2 };
