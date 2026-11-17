import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BuildingAnnexProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BuildingAnnex: ForwardRefExoticComponent<BuildingAnnexProps & RefAttributes<SVGSVGElement>>;

export default BuildingAnnex;
export { BuildingAnnex };
