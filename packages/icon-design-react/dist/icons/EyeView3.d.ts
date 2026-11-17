import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeView3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeView3: ForwardRefExoticComponent<EyeView3Props & RefAttributes<SVGSVGElement>>;

export default EyeView3;
export { EyeView3 };
