import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtXCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtXCurved: ForwardRefExoticComponent<AtXCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtXCurved;
export { AtXCurved };
