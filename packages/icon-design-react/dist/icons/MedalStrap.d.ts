import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalStrapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalStrap: ForwardRefExoticComponent<MedalStrapProps & RefAttributes<SVGSVGElement>>;

export default MedalStrap;
export { MedalStrap };
