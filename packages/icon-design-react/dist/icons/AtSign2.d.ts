import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2: ForwardRefExoticComponent<AtSign2Props & RefAttributes<SVGSVGElement>>;

export default AtSign2;
export { AtSign2 };
