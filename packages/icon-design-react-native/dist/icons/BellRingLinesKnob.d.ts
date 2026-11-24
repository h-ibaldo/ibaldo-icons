import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingLinesKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingLinesKnob: ForwardRefExoticComponent<BellRingLinesKnobProps & RefAttributes<Svg>>;

export default BellRingLinesKnob;
export { BellRingLinesKnob };
