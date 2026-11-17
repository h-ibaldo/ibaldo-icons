import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCircleSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCircleSharp: ForwardRefExoticComponent<TabXCircleSharpProps & RefAttributes<SVGSVGElement>>;

export default TabXCircleSharp;
export { TabXCircleSharp };
