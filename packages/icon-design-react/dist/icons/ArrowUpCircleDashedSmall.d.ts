import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleDashedSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleDashedSmall: ForwardRefExoticComponent<ArrowUpCircleDashedSmallProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleDashedSmall;
export { ArrowUpCircleDashedSmall };
