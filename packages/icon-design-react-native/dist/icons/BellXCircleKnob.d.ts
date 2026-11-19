import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellXCircleKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellXCircleKnob: ForwardRefExoticComponent<BellXCircleKnobProps & RefAttributes<Svg>>;

export default BellXCircleKnob;
export { BellXCircleKnob };
