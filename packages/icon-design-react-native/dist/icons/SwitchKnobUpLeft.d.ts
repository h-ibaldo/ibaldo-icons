import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchKnobUpLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchKnobUpLeft: ForwardRefExoticComponent<SwitchKnobUpLeftProps & RefAttributes<Svg>>;

export default SwitchKnobUpLeft;
export { SwitchKnobUpLeft };
