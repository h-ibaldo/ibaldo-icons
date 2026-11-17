import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign1PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign1Plus: ForwardRefExoticComponent<AtSign1PlusProps & RefAttributes<SVGSVGElement>>;

export default AtSign1Plus;
export { AtSign1Plus };
