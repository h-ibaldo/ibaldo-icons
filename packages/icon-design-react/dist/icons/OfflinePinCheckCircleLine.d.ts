import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OfflinePinCheckCircleLineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OfflinePinCheckCircleLine: ForwardRefExoticComponent<OfflinePinCheckCircleLineProps & RefAttributes<SVGSVGElement>>;

export default OfflinePinCheckCircleLine;
export { OfflinePinCheckCircleLine };
