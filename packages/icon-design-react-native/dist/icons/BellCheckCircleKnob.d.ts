import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckCircleKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleKnob: ForwardRefExoticComponent<BellCheckCircleKnobProps & RefAttributes<Svg>>;

export default BellCheckCircleKnob;
export { BellCheckCircleKnob };
