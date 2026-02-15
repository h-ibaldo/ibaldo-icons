import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1: ForwardRefExoticComponent<Cloud1Props & RefAttributes<SVGSVGElement>>;

export default Cloud1;
export { Cloud1 };
