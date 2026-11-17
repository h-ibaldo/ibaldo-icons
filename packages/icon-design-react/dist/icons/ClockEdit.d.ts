import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockEdit: ForwardRefExoticComponent<ClockEditProps & RefAttributes<SVGSVGElement>>;

export default ClockEdit;
export { ClockEdit };
