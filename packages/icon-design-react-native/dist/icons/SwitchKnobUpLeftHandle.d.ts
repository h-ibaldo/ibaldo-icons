import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchKnobUpLeftHandleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchKnobUpLeftHandle: ForwardRefExoticComponent<SwitchKnobUpLeftHandleProps & RefAttributes<Svg>>;

export default SwitchKnobUpLeftHandle;
export { SwitchKnobUpLeftHandle };
