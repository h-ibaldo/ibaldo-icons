import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3OneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3One: ForwardRefExoticComponent<AtSign3OneProps & RefAttributes<SVGSVGElement>>;

export default AtSign3One;
export { AtSign3One };
