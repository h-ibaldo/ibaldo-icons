import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyBlockToothedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyBlockToothed: ForwardRefExoticComponent<KeyBlockToothedProps & RefAttributes<Svg>>;

export default KeyBlockToothed;
export { KeyBlockToothed };
