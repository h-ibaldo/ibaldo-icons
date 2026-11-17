import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SelfieProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie: ForwardRefExoticComponent<SelfieProps & RefAttributes<SVGSVGElement>>;

export default Selfie;
export { Selfie };
