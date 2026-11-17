import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2Alert: ForwardRefExoticComponent<AtSign2AlertProps & RefAttributes<SVGSVGElement>>;

export default AtSign2Alert;
export { AtSign2Alert };
