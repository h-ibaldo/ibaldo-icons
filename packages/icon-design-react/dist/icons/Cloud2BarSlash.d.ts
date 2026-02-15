import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2BarSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2BarSlash: ForwardRefExoticComponent<Cloud2BarSlashProps & RefAttributes<SVGSVGElement>>;

export default Cloud2BarSlash;
export { Cloud2BarSlash };
