import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCloseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabClose: ForwardRefExoticComponent<TabCloseProps & RefAttributes<SVGSVGElement>>;

export default TabClose;
export { TabClose };
