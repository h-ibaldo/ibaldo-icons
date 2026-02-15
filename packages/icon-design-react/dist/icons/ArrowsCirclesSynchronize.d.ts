import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsCirclesSynchronizeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsCirclesSynchronize: ForwardRefExoticComponent<ArrowsCirclesSynchronizeProps & RefAttributes<SVGSVGElement>>;

export default ArrowsCirclesSynchronize;
export { ArrowsCirclesSynchronize };
