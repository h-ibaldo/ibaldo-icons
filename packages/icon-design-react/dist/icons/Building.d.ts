import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Building: ForwardRefExoticComponent<BuildingProps & RefAttributes<SVGSVGElement>>;

export default Building;
export { Building };
