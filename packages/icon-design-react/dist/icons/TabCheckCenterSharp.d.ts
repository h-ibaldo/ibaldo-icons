import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCenterSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCenterSharp: ForwardRefExoticComponent<TabCheckCenterSharpProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCenterSharp;
export { TabCheckCenterSharp };
