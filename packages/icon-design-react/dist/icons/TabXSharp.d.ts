import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXSharp: ForwardRefExoticComponent<TabXSharpProps & RefAttributes<SVGSVGElement>>;

export default TabXSharp;
export { TabXSharp };
