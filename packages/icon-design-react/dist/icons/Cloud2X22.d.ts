import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2X22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2X22: ForwardRefExoticComponent<Cloud2X22Props & RefAttributes<SVGSVGElement>>;

export default Cloud2X22;
export { Cloud2X22 };
