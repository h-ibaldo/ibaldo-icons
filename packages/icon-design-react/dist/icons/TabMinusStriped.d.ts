import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusStriped: ForwardRefExoticComponent<TabMinusStripedProps & RefAttributes<SVGSVGElement>>;

export default TabMinusStriped;
export { TabMinusStriped };
