import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalStrapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalStrap: ForwardRefExoticComponent<MedalStrapProps & RefAttributes<Svg>>;

export default MedalStrap;
export { MedalStrap };
