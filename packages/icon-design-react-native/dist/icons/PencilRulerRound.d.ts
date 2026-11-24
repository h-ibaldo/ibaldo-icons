import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilRulerRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilRulerRound: ForwardRefExoticComponent<PencilRulerRoundProps & RefAttributes<Svg>>;

export default PencilRulerRound;
export { PencilRulerRound };
