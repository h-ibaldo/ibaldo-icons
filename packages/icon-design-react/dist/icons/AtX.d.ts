import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtX: ForwardRefExoticComponent<AtXProps & RefAttributes<SVGSVGElement>>;

export default AtX;
export { AtX };
