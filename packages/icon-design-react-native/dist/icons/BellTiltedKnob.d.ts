import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellTiltedKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellTiltedKnob: ForwardRefExoticComponent<BellTiltedKnobProps & RefAttributes<Svg>>;

export default BellTiltedKnob;
export { BellTiltedKnob };
