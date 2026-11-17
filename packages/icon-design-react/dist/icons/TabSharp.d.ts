import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabSharp: ForwardRefExoticComponent<TabSharpProps & RefAttributes<SVGSVGElement>>;

export default TabSharp;
export { TabSharp };
