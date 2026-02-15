import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockViewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockView: ForwardRefExoticComponent<ClockViewProps & RefAttributes<SVGSVGElement>>;

export default ClockView;
export { ClockView };
