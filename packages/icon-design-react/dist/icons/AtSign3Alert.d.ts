import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3Alert: ForwardRefExoticComponent<AtSign3AlertProps & RefAttributes<SVGSVGElement>>;

export default AtSign3Alert;
export { AtSign3Alert };
