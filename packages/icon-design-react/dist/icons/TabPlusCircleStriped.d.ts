import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCircleStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCircleStriped: ForwardRefExoticComponent<TabPlusCircleStripedProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCircleStriped;
export { TabPlusCircleStriped };
