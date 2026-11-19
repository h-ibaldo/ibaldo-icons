import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MedalFoldedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MedalFolded: ForwardRefExoticComponent<MedalFoldedProps & RefAttributes<Svg>>;

export default MedalFolded;
export { MedalFolded };
