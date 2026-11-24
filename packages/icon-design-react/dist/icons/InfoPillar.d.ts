import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoPillarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoPillar: ForwardRefExoticComponent<InfoPillarProps & RefAttributes<SVGSVGElement>>;

export default InfoPillar;
export { InfoPillar };
