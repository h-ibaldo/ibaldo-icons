import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowOrbitAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowOrbitAxis: ForwardRefExoticComponent<ArrowOrbitAxisProps & RefAttributes<SVGSVGElement>>;

export default ArrowOrbitAxis;
export { ArrowOrbitAxis };
