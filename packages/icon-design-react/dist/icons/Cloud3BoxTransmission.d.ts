import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud3BoxTransmissionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud3BoxTransmission: ForwardRefExoticComponent<Cloud3BoxTransmissionProps & RefAttributes<SVGSVGElement>>;

export default Cloud3BoxTransmission;
export { Cloud3BoxTransmission };
