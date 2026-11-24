import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalCheckHookProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalCheckHook: ForwardRefExoticComponent<MedalCheckHookProps & RefAttributes<Svg>>;

export default MedalCheckHook;
export { MedalCheckHook };
