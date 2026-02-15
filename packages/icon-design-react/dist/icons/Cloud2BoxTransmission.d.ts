import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BoxTransmissionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2BoxTransmission: ForwardRefExoticComponent<Cloud2BoxTransmissionProps & RefAttributes<SVGSVGElement>>;

export default Cloud2BoxTransmission;
export { Cloud2BoxTransmission };
