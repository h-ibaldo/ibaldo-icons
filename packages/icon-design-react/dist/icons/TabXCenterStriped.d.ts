import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCenterStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCenterStriped: ForwardRefExoticComponent<TabXCenterStripedProps & RefAttributes<SVGSVGElement>>;

export default TabXCenterStriped;
export { TabXCenterStriped };
