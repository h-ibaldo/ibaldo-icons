import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalCheckStrapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalCheckStrap: ForwardRefExoticComponent<MedalCheckStrapProps & RefAttributes<Svg>>;

export default MedalCheckStrap;
export { MedalCheckStrap };
