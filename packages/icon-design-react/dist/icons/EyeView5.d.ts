import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeView5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeView5: ForwardRefExoticComponent<EyeView5Props & RefAttributes<SVGSVGElement>>;

export default EyeView5;
export { EyeView5 };
