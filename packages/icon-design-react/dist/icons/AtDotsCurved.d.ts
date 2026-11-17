import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtDotsCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtDotsCurved: ForwardRefExoticComponent<AtDotsCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtDotsCurved;
export { AtDotsCurved };
