import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabXCenterSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabXCenterSharp: ForwardRefExoticComponent<TabXCenterSharpProps & RefAttributes<SVGSVGElement>>;

export default TabXCenterSharp;
export { TabXCenterSharp };
