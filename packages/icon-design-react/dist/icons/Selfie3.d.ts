import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie3: ForwardRefExoticComponent<Selfie3Props & RefAttributes<SVGSVGElement>>;

export default Selfie3;
export { Selfie3 };
