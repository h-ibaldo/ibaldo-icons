import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowConvergeRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowConvergeRightCircle: ForwardRefExoticComponent<ArrowConvergeRightCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowConvergeRightCircle;
export { ArrowConvergeRightCircle };
