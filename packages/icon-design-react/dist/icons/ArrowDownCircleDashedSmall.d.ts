import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleDashedSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleDashedSmall: ForwardRefExoticComponent<ArrowDownCircleDashedSmallProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleDashedSmall;
export { ArrowDownCircleDashedSmall };
