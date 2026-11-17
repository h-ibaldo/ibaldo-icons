import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaneArrowRightStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaneArrowRightStriped: ForwardRefExoticComponent<PaneArrowRightStripedProps & RefAttributes<SVGSVGElement>>;

export default PaneArrowRightStriped;
export { PaneArrowRightStriped };
