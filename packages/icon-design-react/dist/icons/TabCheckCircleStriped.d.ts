import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCircleStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCircleStriped: ForwardRefExoticComponent<TabCheckCircleStripedProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCircleStriped;
export { TabCheckCircleStriped };
