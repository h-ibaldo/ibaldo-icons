import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2OneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2One: ForwardRefExoticComponent<AtSign2OneProps & RefAttributes<SVGSVGElement>>;

export default AtSign2One;
export { AtSign2One };
