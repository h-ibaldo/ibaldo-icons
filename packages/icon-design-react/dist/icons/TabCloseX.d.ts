import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCloseXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCloseX: ForwardRefExoticComponent<TabCloseXProps & RefAttributes<SVGSVGElement>>;

export default TabCloseX;
export { TabCloseX };
