import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4X: ForwardRefExoticComponent<AtSign4XProps & RefAttributes<SVGSVGElement>>;

export default AtSign4X;
export { AtSign4X };
