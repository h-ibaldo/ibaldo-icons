import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownBandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownBand: ForwardRefExoticComponent<CrownBandProps & RefAttributes<SVGSVGElement>>;

export default CrownBand;
export { CrownBand };
