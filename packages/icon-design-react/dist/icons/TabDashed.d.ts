import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDashed: ForwardRefExoticComponent<TabDashedProps & RefAttributes<SVGSVGElement>>;

export default TabDashed;
export { TabDashed };
