import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2AlertSignProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2AlertSign: ForwardRefExoticComponent<Cloud2AlertSignProps & RefAttributes<SVGSVGElement>>;

export default Cloud2AlertSign;
export { Cloud2AlertSign };
