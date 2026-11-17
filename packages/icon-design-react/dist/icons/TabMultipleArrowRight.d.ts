import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMultipleArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMultipleArrowRight: ForwardRefExoticComponent<TabMultipleArrowRightProps & RefAttributes<SVGSVGElement>>;

export default TabMultipleArrowRight;
export { TabMultipleArrowRight };
