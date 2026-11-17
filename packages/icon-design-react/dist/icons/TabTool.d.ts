import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabToolProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabTool: ForwardRefExoticComponent<TabToolProps & RefAttributes<SVGSVGElement>>;

export default TabTool;
export { TabTool };
