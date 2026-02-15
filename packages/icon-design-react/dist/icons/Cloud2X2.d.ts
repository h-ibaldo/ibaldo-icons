import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2X2: ForwardRefExoticComponent<Cloud2X2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2X2;
export { Cloud2X2 };
