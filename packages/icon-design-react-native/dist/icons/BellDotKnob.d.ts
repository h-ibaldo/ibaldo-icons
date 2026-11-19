import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellDotKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellDotKnob: ForwardRefExoticComponent<BellDotKnobProps & RefAttributes<Svg>>;

export default BellDotKnob;
export { BellDotKnob };
