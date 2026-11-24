import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingGableProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingGable: ForwardRefExoticComponent<BuildingGableProps & RefAttributes<SVGSVGElement>>;

export default BuildingGable;
export { BuildingGable };
