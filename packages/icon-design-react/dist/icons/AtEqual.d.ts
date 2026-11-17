import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtEqualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtEqual: ForwardRefExoticComponent<AtEqualProps & RefAttributes<SVGSVGElement>>;

export default AtEqual;
export { AtEqual };
