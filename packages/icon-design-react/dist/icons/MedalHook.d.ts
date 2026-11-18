import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalHookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalHook: ForwardRefExoticComponent<MedalHookProps & RefAttributes<SVGSVGElement>>;

export default MedalHook;
export { MedalHook };
