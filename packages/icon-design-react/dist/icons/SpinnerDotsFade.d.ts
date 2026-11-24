import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerDotsFadeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerDotsFade: ForwardRefExoticComponent<SpinnerDotsFadeProps & RefAttributes<SVGSVGElement>>;

export default SpinnerDotsFade;
export { SpinnerDotsFade };
