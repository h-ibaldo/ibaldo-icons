import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DotsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DotsCircle: ForwardRefExoticComponent<DotsCircleProps & RefAttributes<SVGSVGElement>>;

export default DotsCircle;
export { DotsCircle };
