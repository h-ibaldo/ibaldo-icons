import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandPointerFingersRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandPointerFingersRound: ForwardRefExoticComponent<HandPointerFingersRoundProps & RefAttributes<Svg>>;

export default HandPointerFingersRound;
export { HandPointerFingersRound };
