import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockArrowsSynchronizeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockArrowsSynchronize: ForwardRefExoticComponent<ClockArrowsSynchronizeProps & RefAttributes<SVGSVGElement>>;

export default ClockArrowsSynchronize;
export { ClockArrowsSynchronize };
