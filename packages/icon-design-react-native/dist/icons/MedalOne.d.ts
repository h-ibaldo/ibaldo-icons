import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalOneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalOne: ForwardRefExoticComponent<MedalOneProps & RefAttributes<Svg>>;

export default MedalOne;
export { MedalOne };
