import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckStriped: ForwardRefExoticComponent<TabCheckStripedProps & RefAttributes<SVGSVGElement>>;

export default TabCheckStriped;
export { TabCheckStriped };
