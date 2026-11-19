import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchKnobUpRightHandleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchKnobUpRightHandle: ForwardRefExoticComponent<SwitchKnobUpRightHandleProps & RefAttributes<Svg>>;

export default SwitchKnobUpRightHandle;
export { SwitchKnobUpRightHandle };
