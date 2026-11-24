import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusCenterStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusCenterStriped: ForwardRefExoticComponent<TabMinusCenterStripedProps & RefAttributes<SVGSVGElement>>;

export default TabMinusCenterStriped;
export { TabMinusCenterStriped };
