import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbDownSleeveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbDownSleeve: ForwardRefExoticComponent<HandThumbDownSleeveProps & RefAttributes<SVGSVGElement>>;

export default HandThumbDownSleeve;
export { HandThumbDownSleeve };
