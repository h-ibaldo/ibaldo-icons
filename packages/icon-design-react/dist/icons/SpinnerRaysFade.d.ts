import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerRaysFadeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpinnerRaysFade: ForwardRefExoticComponent<SpinnerRaysFadeProps & RefAttributes<SVGSVGElement>>;

export default SpinnerRaysFade;
export { SpinnerRaysFade };
