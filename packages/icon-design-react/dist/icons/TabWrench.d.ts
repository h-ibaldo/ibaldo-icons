import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabWrenchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabWrench: ForwardRefExoticComponent<TabWrenchProps & RefAttributes<SVGSVGElement>>;

export default TabWrench;
export { TabWrench };
