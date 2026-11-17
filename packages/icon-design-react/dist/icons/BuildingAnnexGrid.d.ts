import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingAnnexGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingAnnexGrid: ForwardRefExoticComponent<BuildingAnnexGridProps & RefAttributes<SVGSVGElement>>;

export default BuildingAnnexGrid;
export { BuildingAnnexGrid };
