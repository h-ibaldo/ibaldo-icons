import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusStriped: ForwardRefExoticComponent<TabPlusStripedProps & RefAttributes<SVGSVGElement>>;

export default TabPlusStriped;
export { TabPlusStriped };
