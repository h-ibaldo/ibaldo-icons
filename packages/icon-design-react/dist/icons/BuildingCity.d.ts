import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingCityProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingCity: ForwardRefExoticComponent<BuildingCityProps & RefAttributes<SVGSVGElement>>;

export default BuildingCity;
export { BuildingCity };
