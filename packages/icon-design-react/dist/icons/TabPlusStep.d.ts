import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabPlusStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabPlusStep: ForwardRefExoticComponent<TabPlusStepProps & RefAttributes<SVGSVGElement>>;

export default TabPlusStep;
export { TabPlusStep };
