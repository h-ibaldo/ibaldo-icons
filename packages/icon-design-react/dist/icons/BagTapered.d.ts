import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagTaperedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagTapered: ForwardRefExoticComponent<BagTaperedProps & RefAttributes<SVGSVGElement>>;

export default BagTapered;
export { BagTapered };
