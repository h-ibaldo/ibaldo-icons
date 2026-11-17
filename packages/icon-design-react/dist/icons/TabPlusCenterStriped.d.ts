import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCenterStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCenterStriped: ForwardRefExoticComponent<TabPlusCenterStripedProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCenterStriped;
export { TabPlusCenterStriped };
