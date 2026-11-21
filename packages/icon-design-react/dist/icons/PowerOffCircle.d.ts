import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PowerOffCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PowerOffCircle: ForwardRefExoticComponent<PowerOffCircleProps & RefAttributes<SVGSVGElement>>;

export default PowerOffCircle;
export { PowerOffCircle };
