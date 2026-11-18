import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalOneStrapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalOneStrap: ForwardRefExoticComponent<MedalOneStrapProps & RefAttributes<SVGSVGElement>>;

export default MedalOneStrap;
export { MedalOneStrap };
