import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarMultipleStripedJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarMultipleStripedJoined: ForwardRefExoticComponent<ProgressBarMultipleStripedJoinedProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarMultipleStripedJoined;
export { ProgressBarMultipleStripedJoined };
