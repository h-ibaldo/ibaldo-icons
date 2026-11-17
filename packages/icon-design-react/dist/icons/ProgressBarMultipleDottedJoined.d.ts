import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarMultipleDottedJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarMultipleDottedJoined: ForwardRefExoticComponent<ProgressBarMultipleDottedJoinedProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarMultipleDottedJoined;
export { ProgressBarMultipleDottedJoined };
