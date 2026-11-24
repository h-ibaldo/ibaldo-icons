import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabCheckStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabCheckStep: ForwardRefExoticComponent<TabCheckStepProps & RefAttributes<SVGSVGElement>>;

export default TabCheckStep;
export { TabCheckStep };
