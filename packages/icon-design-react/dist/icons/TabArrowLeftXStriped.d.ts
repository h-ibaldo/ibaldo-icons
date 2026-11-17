import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabArrowLeftXStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabArrowLeftXStriped: ForwardRefExoticComponent<TabArrowLeftXStripedProps & RefAttributes<SVGSVGElement>>;

export default TabArrowLeftXStriped;
export { TabArrowLeftXStriped };
