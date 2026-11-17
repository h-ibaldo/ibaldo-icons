import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbUpSleeveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbUpSleeve: ForwardRefExoticComponent<HandThumbUpSleeveProps & RefAttributes<SVGSVGElement>>;

export default HandThumbUpSleeve;
export { HandThumbUpSleeve };
