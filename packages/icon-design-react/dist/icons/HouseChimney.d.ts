import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseChimneyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseChimney: ForwardRefExoticComponent<HouseChimneyProps & RefAttributes<SVGSVGElement>>;

export default HouseChimney;
export { HouseChimney };
