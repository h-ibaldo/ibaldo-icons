import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckVerifiedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckVerified: ForwardRefExoticComponent<TabCheckVerifiedProps & RefAttributes<SVGSVGElement>>;

export default TabCheckVerified;
export { TabCheckVerified };
