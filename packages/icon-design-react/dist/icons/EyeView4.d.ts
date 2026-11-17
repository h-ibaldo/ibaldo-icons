import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeView4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeView4: ForwardRefExoticComponent<EyeView4Props & RefAttributes<SVGSVGElement>>;

export default EyeView4;
export { EyeView4 };
