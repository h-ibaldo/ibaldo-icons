import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalOneStrapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalOneStrap: ForwardRefExoticComponent<MedalOneStrapProps & RefAttributes<Svg>>;

export default MedalOneStrap;
export { MedalOneStrap };
