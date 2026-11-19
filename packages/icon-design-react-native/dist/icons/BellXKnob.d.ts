import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXKnob: ForwardRefExoticComponent<BellXKnobProps & RefAttributes<Svg>>;

export default BellXKnob;
export { BellXKnob };
