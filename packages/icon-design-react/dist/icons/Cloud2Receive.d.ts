import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2ReceiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Receive: ForwardRefExoticComponent<Cloud2ReceiveProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Receive;
export { Cloud2Receive };
