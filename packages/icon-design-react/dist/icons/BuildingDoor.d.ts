import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingDoorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingDoor: ForwardRefExoticComponent<BuildingDoorProps & RefAttributes<SVGSVGElement>>;

export default BuildingDoor;
export { BuildingDoor };
