import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1BarSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1BarSlash: ForwardRefExoticComponent<Cloud1BarSlashProps & RefAttributes<SVGSVGElement>>;

export default Cloud1BarSlash;
export { Cloud1BarSlash };
