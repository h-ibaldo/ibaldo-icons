import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckCircle: ForwardRefExoticComponent<BellCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default BellCheckCircle;
export { BellCheckCircle };
