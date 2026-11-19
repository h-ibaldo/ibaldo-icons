import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalOneHookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalOneHook: ForwardRefExoticComponent<MedalOneHookProps & RefAttributes<Svg>>;

export default MedalOneHook;
export { MedalOneHook };
