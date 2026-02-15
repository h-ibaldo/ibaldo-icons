import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPencilEditProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPencilEdit: ForwardRefExoticComponent<ClockPencilEditProps & RefAttributes<SVGSVGElement>>;

export default ClockPencilEdit;
export { ClockPencilEdit };
