import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud12: ForwardRefExoticComponent<Cloud12Props & RefAttributes<SVGSVGElement>>;

export default Cloud12;
export { Cloud12 };
