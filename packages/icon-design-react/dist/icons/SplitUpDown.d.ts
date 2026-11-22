import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SplitUpDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SplitUpDown: ForwardRefExoticComponent<SplitUpDownProps & RefAttributes<SVGSVGElement>>;

export default SplitUpDown;
export { SplitUpDown };
