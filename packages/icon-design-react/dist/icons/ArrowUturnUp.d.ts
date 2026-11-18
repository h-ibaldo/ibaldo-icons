import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnUp: ForwardRefExoticComponent<ArrowUturnUpProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnUp;
export { ArrowUturnUp };
