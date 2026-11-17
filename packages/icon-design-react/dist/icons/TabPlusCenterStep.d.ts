import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCenterStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCenterStep: ForwardRefExoticComponent<TabPlusCenterStepProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCenterStep;
export { TabPlusCenterStep };
