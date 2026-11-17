import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusCircleStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusCircleStriped: ForwardRefExoticComponent<TabMinusCircleStripedProps & RefAttributes<SVGSVGElement>>;

export default TabMinusCircleStriped;
export { TabMinusCircleStriped };
