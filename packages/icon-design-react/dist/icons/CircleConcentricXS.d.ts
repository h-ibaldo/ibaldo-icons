import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleConcentricXSProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleConcentricXS: ForwardRefExoticComponent<CircleConcentricXSProps & RefAttributes<SVGSVGElement>>;

export default CircleConcentricXS;
export { CircleConcentricXS };
