import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellPlusKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellPlusKnob: ForwardRefExoticComponent<BellPlusKnobProps & RefAttributes<Svg>>;

export default BellPlusKnob;
export { BellPlusKnob };
