import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtEqualCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtEqualCurved: ForwardRefExoticComponent<AtEqualCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtEqualCurved;
export { AtEqualCurved };
