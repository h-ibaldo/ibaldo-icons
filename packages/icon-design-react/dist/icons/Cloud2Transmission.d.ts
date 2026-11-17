import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2TransmissionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Transmission: ForwardRefExoticComponent<Cloud2TransmissionProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Transmission;
export { Cloud2Transmission };
