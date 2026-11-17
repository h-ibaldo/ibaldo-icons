import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCircleSharp: ForwardRefExoticComponent<TabCheckCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCircleSharp;
export { TabCheckCircleSharp };
