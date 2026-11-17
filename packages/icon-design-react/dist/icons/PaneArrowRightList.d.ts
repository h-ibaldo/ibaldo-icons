import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaneArrowRightListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaneArrowRightList: ForwardRefExoticComponent<PaneArrowRightListProps & RefAttributes<SVGSVGElement>>;

export default PaneArrowRightList;
export { PaneArrowRightList };
