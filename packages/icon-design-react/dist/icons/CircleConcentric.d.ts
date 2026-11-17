import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleConcentricProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleConcentric: ForwardRefExoticComponent<CircleConcentricProps & RefAttributes<SVGSVGElement>>;

export default CircleConcentric;
export { CircleConcentric };
