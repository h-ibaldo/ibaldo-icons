import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalCheck: ForwardRefExoticComponent<MedalCheckProps & RefAttributes<SVGSVGElement>>;

export default MedalCheck;
export { MedalCheck };
