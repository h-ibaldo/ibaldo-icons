import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Medal: ForwardRefExoticComponent<MedalProps & RefAttributes<Svg>>;

export default Medal;
export { Medal };
