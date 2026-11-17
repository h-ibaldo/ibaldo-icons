import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2X: ForwardRefExoticComponent<AtSign2XProps & RefAttributes<SVGSVGElement>>;

export default AtSign2X;
export { AtSign2X };
