import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleConcentricXLProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleConcentricXL: ForwardRefExoticComponent<CircleConcentricXLProps & RefAttributes<SVGSVGElement>>;

export default CircleConcentricXL;
export { CircleConcentricXL };
