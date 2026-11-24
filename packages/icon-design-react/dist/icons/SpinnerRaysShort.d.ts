import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerRaysShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerRaysShort: ForwardRefExoticComponent<SpinnerRaysShortProps & RefAttributes<SVGSVGElement>>;

export default SpinnerRaysShort;
export { SpinnerRaysShort };
