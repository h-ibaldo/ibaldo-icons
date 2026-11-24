import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SortTwoOneDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SortTwoOneDown: ForwardRefExoticComponent<SortTwoOneDownProps & RefAttributes<SVGSVGElement>>;

export default SortTwoOneDown;
export { SortTwoOneDown };
