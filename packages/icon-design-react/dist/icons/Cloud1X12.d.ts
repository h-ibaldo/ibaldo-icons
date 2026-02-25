import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1X12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1X12: ForwardRefExoticComponent<Cloud1X12Props & RefAttributes<SVGSVGElement>>;

export default Cloud1X12;
export { Cloud1X12 };
