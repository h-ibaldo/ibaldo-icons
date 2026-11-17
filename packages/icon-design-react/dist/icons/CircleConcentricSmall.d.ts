import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleConcentricSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleConcentricSmall: ForwardRefExoticComponent<CircleConcentricSmallProps & RefAttributes<SVGSVGElement>>;

export default CircleConcentricSmall;
export { CircleConcentricSmall };
