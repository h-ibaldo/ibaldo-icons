import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagFlaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagFlared: ForwardRefExoticComponent<BagFlaredProps & RefAttributes<SVGSVGElement>>;

export default BagFlared;
export { BagFlared };
