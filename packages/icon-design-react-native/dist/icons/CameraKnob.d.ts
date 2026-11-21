import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CameraKnobProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CameraKnob: ForwardRefExoticComponent<CameraKnobProps & RefAttributes<Svg>>;

export default CameraKnob;
export { CameraKnob };
