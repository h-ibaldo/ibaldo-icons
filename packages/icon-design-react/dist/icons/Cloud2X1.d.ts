import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2X1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2X1: ForwardRefExoticComponent<Cloud2X1Props & RefAttributes<SVGSVGElement>>;

export default Cloud2X1;
export { Cloud2X1 };
