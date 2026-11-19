import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyRight: ForwardRefExoticComponent<KeyRightProps & RefAttributes<Svg>>;

export default KeyRight;
export { KeyRight };
