import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCurved: ForwardRefExoticComponent<AtCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtCurved;
export { AtCurved };
