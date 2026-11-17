import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4: ForwardRefExoticComponent<AtSign4Props & RefAttributes<SVGSVGElement>>;

export default AtSign4;
export { AtSign4 };
