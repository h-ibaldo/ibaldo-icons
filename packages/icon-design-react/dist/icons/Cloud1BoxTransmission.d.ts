import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1BoxTransmissionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1BoxTransmission: ForwardRefExoticComponent<Cloud1BoxTransmissionProps & RefAttributes<SVGSVGElement>>;

export default Cloud1BoxTransmission;
export { Cloud1BoxTransmission };
