import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowConvergeUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowConvergeUpCircle: ForwardRefExoticComponent<ArrowConvergeUpCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowConvergeUpCircle;
export { ArrowConvergeUpCircle };
