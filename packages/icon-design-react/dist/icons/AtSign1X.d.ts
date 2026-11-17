import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign1XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign1X: ForwardRefExoticComponent<AtSign1XProps & RefAttributes<SVGSVGElement>>;

export default AtSign1X;
export { AtSign1X };
