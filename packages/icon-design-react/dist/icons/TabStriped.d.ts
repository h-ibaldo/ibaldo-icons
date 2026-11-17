import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabStriped: ForwardRefExoticComponent<TabStripedProps & RefAttributes<SVGSVGElement>>;

export default TabStriped;
export { TabStriped };
