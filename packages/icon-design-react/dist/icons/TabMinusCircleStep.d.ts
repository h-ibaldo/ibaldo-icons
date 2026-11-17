import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMinusCircleStepProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMinusCircleStep: ForwardRefExoticComponent<TabMinusCircleStepProps & RefAttributes<SVGSVGElement>>;

export default TabMinusCircleStep;
export { TabMinusCircleStep };
