import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingCityCorniceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingCityCornice: ForwardRefExoticComponent<BuildingCityCorniceProps & RefAttributes<SVGSVGElement>>;

export default BuildingCityCornice;
export { BuildingCityCornice };
