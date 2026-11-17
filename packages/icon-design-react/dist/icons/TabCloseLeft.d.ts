import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCloseLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCloseLeft: ForwardRefExoticComponent<TabCloseLeftProps & RefAttributes<SVGSVGElement>>;

export default TabCloseLeft;
export { TabCloseLeft };
