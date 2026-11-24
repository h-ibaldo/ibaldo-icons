import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeLongArchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeLongArch: ForwardRefExoticComponent<GaugeLongArchProps & RefAttributes<SVGSVGElement>>;

export default GaugeLongArch;
export { GaugeLongArch };
