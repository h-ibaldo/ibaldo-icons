import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerRaysLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerRaysLong: ForwardRefExoticComponent<SpinnerRaysLongProps & RefAttributes<SVGSVGElement>>;

export default SpinnerRaysLong;
export { SpinnerRaysLong };
