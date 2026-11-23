import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EraserRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const EraserRound: ForwardRefExoticComponent<EraserRoundProps & RefAttributes<Svg>>;

export default EraserRound;
export { EraserRound };
