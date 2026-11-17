import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSnoozeDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSnoozeDash: ForwardRefExoticComponent<BellSnoozeDashProps & RefAttributes<SVGSVGElement>>;

export default BellSnoozeDash;
export { BellSnoozeDash };
