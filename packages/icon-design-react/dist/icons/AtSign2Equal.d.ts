import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2EqualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2Equal: ForwardRefExoticComponent<AtSign2EqualProps & RefAttributes<SVGSVGElement>>;

export default AtSign2Equal;
export { AtSign2Equal };
