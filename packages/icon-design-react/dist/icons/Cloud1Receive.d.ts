import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1ReceiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Receive: ForwardRefExoticComponent<Cloud1ReceiveProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Receive;
export { Cloud1Receive };
