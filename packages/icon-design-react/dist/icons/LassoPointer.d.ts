import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LassoPointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LassoPointer: ForwardRefExoticComponent<LassoPointerProps & RefAttributes<SVGSVGElement>>;

export default LassoPointer;
export { LassoPointer };
