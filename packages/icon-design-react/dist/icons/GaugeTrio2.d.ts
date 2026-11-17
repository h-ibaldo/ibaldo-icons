import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeTrio2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeTrio2: ForwardRefExoticComponent<GaugeTrio2Props & RefAttributes<SVGSVGElement>>;

export default GaugeTrio2;
export { GaugeTrio2 };
