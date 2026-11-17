import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCenterSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCenterSharp: ForwardRefExoticComponent<TabPlusCenterSharpProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCenterSharp;
export { TabPlusCenterSharp };
