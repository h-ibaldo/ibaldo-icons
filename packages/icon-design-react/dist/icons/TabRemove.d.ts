import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabRemove: ForwardRefExoticComponent<TabRemoveProps & RefAttributes<SVGSVGElement>>;

export default TabRemove;
export { TabRemove };
