import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCloseRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCloseRight: ForwardRefExoticComponent<TabCloseRightProps & RefAttributes<SVGSVGElement>>;

export default TabCloseRight;
export { TabCloseRight };
