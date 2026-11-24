import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningRound: ForwardRefExoticComponent<WarningRoundProps & RefAttributes<Svg>>;

export default WarningRound;
export { WarningRound };
