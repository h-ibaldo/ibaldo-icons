import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabMultipleChevronRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabMultipleChevronRight: ForwardRefExoticComponent<TabMultipleChevronRightProps & RefAttributes<SVGSVGElement>>;

export default TabMultipleChevronRight;
export { TabMultipleChevronRight };
