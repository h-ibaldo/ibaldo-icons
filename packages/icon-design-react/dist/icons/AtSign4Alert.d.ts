import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4Alert: ForwardRefExoticComponent<AtSign4AlertProps & RefAttributes<SVGSVGElement>>;

export default AtSign4Alert;
export { AtSign4Alert };
