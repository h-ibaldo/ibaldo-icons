import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstSlanted: ForwardRefExoticComponent<LinkBrokenBurstSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstSlanted;
export { LinkBrokenBurstSlanted };
