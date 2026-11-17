import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SelfieNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SelfieNotch: ForwardRefExoticComponent<SelfieNotchProps & RefAttributes<SVGSVGElement>>;

export default SelfieNotch;
export { SelfieNotch };
