import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabChevronDoubleRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabChevronDoubleRight: ForwardRefExoticComponent<TabChevronDoubleRightProps & RefAttributes<SVGSVGElement>>;

export default TabChevronDoubleRight;
export { TabChevronDoubleRight };
