import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellAlertKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellAlertKnob: ForwardRefExoticComponent<BellAlertKnobProps & RefAttributes<Svg>>;

export default BellAlertKnob;
export { BellAlertKnob };
