import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2X12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2X12: ForwardRefExoticComponent<Cloud2X12Props & RefAttributes<SVGSVGElement>>;

export default Cloud2X12;
export { Cloud2X12 };
