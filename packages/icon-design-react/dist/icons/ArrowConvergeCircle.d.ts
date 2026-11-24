import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowConvergeCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowConvergeCircle: ForwardRefExoticComponent<ArrowConvergeCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowConvergeCircle;
export { ArrowConvergeCircle };
