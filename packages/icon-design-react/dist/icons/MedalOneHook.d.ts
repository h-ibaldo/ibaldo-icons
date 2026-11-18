import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalOneHookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalOneHook: ForwardRefExoticComponent<MedalOneHookProps & RefAttributes<SVGSVGElement>>;

export default MedalOneHook;
export { MedalOneHook };
