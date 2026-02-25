import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2Bulb2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Bulb2: ForwardRefExoticComponent<Cloud2Bulb2Props & RefAttributes<SVGSVGElement>>;

export default Cloud2Bulb2;
export { Cloud2Bulb2 };
