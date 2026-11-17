import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsRepeatSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsRepeatSlash: ForwardRefExoticComponent<ArrowsRepeatSlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowsRepeatSlash;
export { ArrowsRepeatSlash };
