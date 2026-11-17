import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXStriped: ForwardRefExoticComponent<TabXStripedProps & RefAttributes<SVGSVGElement>>;

export default TabXStriped;
export { TabXStriped };
