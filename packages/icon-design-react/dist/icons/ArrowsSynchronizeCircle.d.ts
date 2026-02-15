import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsSynchronizeCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsSynchronizeCircle: ForwardRefExoticComponent<ArrowsSynchronizeCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowsSynchronizeCircle;
export { ArrowsSynchronizeCircle };
