import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOffKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOffKnob: ForwardRefExoticComponent<BellOffKnobProps & RefAttributes<Svg>>;

export default BellOffKnob;
export { BellOffKnob };
