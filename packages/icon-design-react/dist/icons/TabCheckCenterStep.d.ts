import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckCenterStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckCenterStep: ForwardRefExoticComponent<TabCheckCenterStepProps & RefAttributes<SVGSVGElement>>;

export default TabCheckCenterStep;
export { TabCheckCenterStep };
