import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingAnnexSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingAnnexSlanted: ForwardRefExoticComponent<BuildingAnnexSlantedProps & RefAttributes<SVGSVGElement>>;

export default BuildingAnnexSlanted;
export { BuildingAnnexSlanted };
