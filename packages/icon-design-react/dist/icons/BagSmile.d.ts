import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BagSmileProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BagSmile: ForwardRefExoticComponent<BagSmileProps & RefAttributes<SVGSVGElement>>;

export default BagSmile;
export { BagSmile };
