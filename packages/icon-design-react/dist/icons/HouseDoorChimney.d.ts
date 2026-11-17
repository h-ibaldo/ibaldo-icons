import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HouseDoorChimneyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HouseDoorChimney: ForwardRefExoticComponent<HouseDoorChimneyProps & RefAttributes<SVGSVGElement>>;

export default HouseDoorChimney;
export { HouseDoorChimney };
