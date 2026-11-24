import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EqualsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Equals: ForwardRefExoticComponent<EqualsProps & RefAttributes<SVGSVGElement>>;

export default Equals;
export { Equals };
