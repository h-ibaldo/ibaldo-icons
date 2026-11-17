import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaneArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaneArrowRight: ForwardRefExoticComponent<PaneArrowRightProps & RefAttributes<SVGSVGElement>>;

export default PaneArrowRight;
export { PaneArrowRight };
