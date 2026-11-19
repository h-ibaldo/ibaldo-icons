import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellKnob: ForwardRefExoticComponent<BellKnobProps & RefAttributes<Svg>>;

export default BellKnob;
export { BellKnob };
