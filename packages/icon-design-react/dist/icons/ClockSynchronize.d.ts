import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSynchronizeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSynchronize: ForwardRefExoticComponent<ClockSynchronizeProps & RefAttributes<SVGSVGElement>>;

export default ClockSynchronize;
export { ClockSynchronize };
