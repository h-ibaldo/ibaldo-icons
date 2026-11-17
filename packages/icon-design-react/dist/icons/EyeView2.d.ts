import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeView2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeView2: ForwardRefExoticComponent<EyeView2Props & RefAttributes<SVGSVGElement>>;

export default EyeView2;
export { EyeView2 };
