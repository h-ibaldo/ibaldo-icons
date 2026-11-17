import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingIsometricProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingIsometric: ForwardRefExoticComponent<BuildingIsometricProps & RefAttributes<SVGSVGElement>>;

export default BuildingIsometric;
export { BuildingIsometric };
