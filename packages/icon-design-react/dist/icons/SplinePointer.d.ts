import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SplinePointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SplinePointer: ForwardRefExoticComponent<SplinePointerProps & RefAttributes<SVGSVGElement>>;

export default SplinePointer;
export { SplinePointer };
