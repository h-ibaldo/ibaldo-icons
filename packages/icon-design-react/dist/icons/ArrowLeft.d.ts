import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeft: ForwardRefExoticComponent<ArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeft;
export { ArrowLeft };
