import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalOne: ForwardRefExoticComponent<MedalOneProps & RefAttributes<SVGSVGElement>>;

export default MedalOne;
export { MedalOne };
