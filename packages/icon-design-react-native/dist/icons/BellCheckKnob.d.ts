import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckKnob: ForwardRefExoticComponent<BellCheckKnobProps & RefAttributes<Svg>>;

export default BellCheckKnob;
export { BellCheckKnob };
