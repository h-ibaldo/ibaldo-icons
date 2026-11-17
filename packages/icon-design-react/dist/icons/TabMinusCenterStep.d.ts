import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusCenterStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusCenterStep: ForwardRefExoticComponent<TabMinusCenterStepProps & RefAttributes<SVGSVGElement>>;

export default TabMinusCenterStep;
export { TabMinusCenterStep };
