import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingSlanted: ForwardRefExoticComponent<BuildingSlantedProps & RefAttributes<SVGSVGElement>>;

export default BuildingSlanted;
export { BuildingSlanted };
