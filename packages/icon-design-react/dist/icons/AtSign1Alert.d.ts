import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign1AlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign1Alert: ForwardRefExoticComponent<AtSign1AlertProps & RefAttributes<SVGSVGElement>>;

export default AtSign1Alert;
export { AtSign1Alert };
