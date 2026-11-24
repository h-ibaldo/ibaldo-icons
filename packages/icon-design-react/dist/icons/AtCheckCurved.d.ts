import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCheckCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCheckCurved: ForwardRefExoticComponent<AtCheckCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtCheckCurved;
export { AtCheckCurved };
