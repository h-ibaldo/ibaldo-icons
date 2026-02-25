import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud22: ForwardRefExoticComponent<Cloud22Props & RefAttributes<SVGSVGElement>>;

export default Cloud22;
export { Cloud22 };
