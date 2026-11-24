import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingCityAntennaProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingCityAntenna: ForwardRefExoticComponent<BuildingCityAntennaProps & RefAttributes<SVGSVGElement>>;

export default BuildingCityAntenna;
export { BuildingCityAntenna };
