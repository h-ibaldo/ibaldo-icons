import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusCircleStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusCircleStep: ForwardRefExoticComponent<TabPlusCircleStepProps & RefAttributes<SVGSVGElement>>;

export default TabPlusCircleStep;
export { TabPlusCircleStep };
