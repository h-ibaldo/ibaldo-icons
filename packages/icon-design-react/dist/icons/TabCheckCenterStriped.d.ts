import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCenterStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCenterStriped: ForwardRefExoticComponent<TabCheckCenterStripedProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCenterStriped;
export { TabCheckCenterStriped };
