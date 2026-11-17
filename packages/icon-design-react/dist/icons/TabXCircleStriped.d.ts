import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCircleStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCircleStriped: ForwardRefExoticComponent<TabXCircleStripedProps & RefAttributes<SVGSVGElement>>;

export default TabXCircleStriped;
export { TabXCircleStriped };
