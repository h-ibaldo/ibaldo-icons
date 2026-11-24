import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusSharp: ForwardRefExoticComponent<TabMinusSharpProps & RefAttributes<SVGSVGElement>>;

export default TabMinusSharp;
export { TabMinusSharp };
