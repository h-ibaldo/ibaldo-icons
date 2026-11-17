import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign5AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign5Alert: ForwardRefExoticComponent<AtSign5AlertProps & RefAttributes<SVGSVGElement>>;

export default AtSign5Alert;
export { AtSign5Alert };
