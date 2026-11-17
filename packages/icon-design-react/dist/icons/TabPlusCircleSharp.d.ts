import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCircleSharp: ForwardRefExoticComponent<TabPlusCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCircleSharp;
export { TabPlusCircleSharp };
