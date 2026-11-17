import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckSharp: ForwardRefExoticComponent<TabCheckSharpProps & RefAttributes<SVGSVGElement>>;

export default TabCheckSharp;
export { TabCheckSharp };
