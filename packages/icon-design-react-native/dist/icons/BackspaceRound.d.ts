import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BackspaceRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BackspaceRound: ForwardRefExoticComponent<BackspaceRoundProps & RefAttributes<Svg>>;

export default BackspaceRound;
export { BackspaceRound };
