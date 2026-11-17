import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpinnerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Spinner: ForwardRefExoticComponent<SpinnerProps & RefAttributes<SVGSVGElement>>;

export default Spinner;
export { Spinner };
