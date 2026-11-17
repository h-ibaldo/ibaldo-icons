import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusSharp: ForwardRefExoticComponent<TabPlusSharpProps & RefAttributes<SVGSVGElement>>;

export default TabPlusSharp;
export { TabPlusSharp };
