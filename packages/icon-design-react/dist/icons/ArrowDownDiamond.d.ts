import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownDiamondProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownDiamond: ForwardRefExoticComponent<ArrowDownDiamondProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownDiamond;
export { ArrowDownDiamond };
