import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingCityIsometricProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingCityIsometric: ForwardRefExoticComponent<BuildingCityIsometricProps & RefAttributes<SVGSVGElement>>;

export default BuildingCityIsometric;
export { BuildingCityIsometric };
