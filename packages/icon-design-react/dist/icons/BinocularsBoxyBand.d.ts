import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsBoxyBandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsBoxyBand: ForwardRefExoticComponent<BinocularsBoxyBandProps & RefAttributes<SVGSVGElement>>;

export default BinocularsBoxyBand;
export { BinocularsBoxyBand };
