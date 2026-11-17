import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDotsStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDotsStep: ForwardRefExoticComponent<TabDotsStepProps & RefAttributes<SVGSVGElement>>;

export default TabDotsStep;
export { TabDotsStep };
