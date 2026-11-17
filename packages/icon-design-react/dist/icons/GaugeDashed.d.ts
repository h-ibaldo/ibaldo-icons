import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeDashed: ForwardRefExoticComponent<GaugeDashedProps & RefAttributes<SVGSVGElement>>;

export default GaugeDashed;
export { GaugeDashed };
