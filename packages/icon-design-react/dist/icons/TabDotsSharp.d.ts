import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDotsSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDotsSharp: ForwardRefExoticComponent<TabDotsSharpProps & RefAttributes<SVGSVGElement>>;

export default TabDotsSharp;
export { TabDotsSharp };
