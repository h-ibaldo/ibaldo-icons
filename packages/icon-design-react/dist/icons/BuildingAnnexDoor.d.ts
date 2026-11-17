import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingAnnexDoorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingAnnexDoor: ForwardRefExoticComponent<BuildingAnnexDoorProps & RefAttributes<SVGSVGElement>>;

export default BuildingAnnexDoor;
export { BuildingAnnexDoor };
