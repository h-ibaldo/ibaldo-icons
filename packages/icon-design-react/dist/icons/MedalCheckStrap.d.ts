import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalCheckStrapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalCheckStrap: ForwardRefExoticComponent<MedalCheckStrapProps & RefAttributes<SVGSVGElement>>;

export default MedalCheckStrap;
export { MedalCheckStrap };
