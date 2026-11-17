import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtMinusCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtMinusCurved: ForwardRefExoticComponent<AtMinusCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtMinusCurved;
export { AtMinusCurved };
