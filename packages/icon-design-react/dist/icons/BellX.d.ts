import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellX: ForwardRefExoticComponent<BellXProps & RefAttributes<SVGSVGElement>>;

export default BellX;
export { BellX };
