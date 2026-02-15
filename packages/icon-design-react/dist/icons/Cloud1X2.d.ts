import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1X2: ForwardRefExoticComponent<Cloud1X2Props & RefAttributes<SVGSVGElement>>;

export default Cloud1X2;
export { Cloud1X2 };
