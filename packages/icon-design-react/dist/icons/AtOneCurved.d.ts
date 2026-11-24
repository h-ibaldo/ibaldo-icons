import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtOneCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtOneCurved: ForwardRefExoticComponent<AtOneCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtOneCurved;
export { AtOneCurved };
