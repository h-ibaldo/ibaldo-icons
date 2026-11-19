import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalCheck: ForwardRefExoticComponent<MedalCheckProps & RefAttributes<Svg>>;

export default MedalCheck;
export { MedalCheck };
