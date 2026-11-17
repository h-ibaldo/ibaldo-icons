import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerSplit: ForwardRefExoticComponent<SpinnerSplitProps & RefAttributes<SVGSVGElement>>;

export default SpinnerSplit;
export { SpinnerSplit };
