import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeView1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeView1: ForwardRefExoticComponent<EyeView1Props & RefAttributes<SVGSVGElement>>;

export default EyeView1;
export { EyeView1 };
