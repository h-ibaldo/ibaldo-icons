import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BackspaceCheckRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BackspaceCheckRound: ForwardRefExoticComponent<BackspaceCheckRoundProps & RefAttributes<Svg>>;

export default BackspaceCheckRound;
export { BackspaceCheckRound };
