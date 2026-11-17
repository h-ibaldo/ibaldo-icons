import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart2StripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart2Striped: ForwardRefExoticComponent<Heart2StripedProps & RefAttributes<SVGSVGElement>>;

export default Heart2Striped;
export { Heart2Striped };
