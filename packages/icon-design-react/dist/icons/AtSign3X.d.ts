import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3X: ForwardRefExoticComponent<AtSign3XProps & RefAttributes<SVGSVGElement>>;

export default AtSign3X;
export { AtSign3X };
