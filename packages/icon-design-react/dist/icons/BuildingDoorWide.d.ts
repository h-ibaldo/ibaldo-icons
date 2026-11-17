import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingDoorWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingDoorWide: ForwardRefExoticComponent<BuildingDoorWideProps & RefAttributes<SVGSVGElement>>;

export default BuildingDoorWide;
export { BuildingDoorWide };
