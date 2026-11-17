import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabTitleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabTitle: ForwardRefExoticComponent<TabTitleProps & RefAttributes<SVGSVGElement>>;

export default TabTitle;
export { TabTitle };
