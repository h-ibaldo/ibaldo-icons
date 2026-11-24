import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DivideCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DivideCircle: ForwardRefExoticComponent<DivideCircleProps & RefAttributes<SVGSVGElement>>;

export default DivideCircle;
export { DivideCircle };
