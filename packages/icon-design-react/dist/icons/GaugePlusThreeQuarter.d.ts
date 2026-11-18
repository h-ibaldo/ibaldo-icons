import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugePlusThreeQuarterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugePlusThreeQuarter: ForwardRefExoticComponent<GaugePlusThreeQuarterProps & RefAttributes<SVGSVGElement>>;

export default GaugePlusThreeQuarter;
export { GaugePlusThreeQuarter };
