import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3EqualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3Equal: ForwardRefExoticComponent<AtSign3EqualProps & RefAttributes<SVGSVGElement>>;

export default AtSign3Equal;
export { AtSign3Equal };
