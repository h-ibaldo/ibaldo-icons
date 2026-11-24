import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Award: ForwardRefExoticComponent<AwardProps & RefAttributes<SVGSVGElement>>;

export default Award;
export { Award };
