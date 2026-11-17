import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3BoxTransmitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3BoxTransmit: ForwardRefExoticComponent<Cloud3BoxTransmitProps & RefAttributes<SVGSVGElement>>;

export default Cloud3BoxTransmit;
export { Cloud3BoxTransmit };
