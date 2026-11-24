import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabArrowRightXStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabArrowRightXStriped: ForwardRefExoticComponent<TabArrowRightXStripedProps & RefAttributes<SVGSVGElement>>;

export default TabArrowRightXStriped;
export { TabArrowRightXStriped };
