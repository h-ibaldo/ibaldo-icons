import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyWide: ForwardRefExoticComponent<KeyWideProps & RefAttributes<Svg>>;

export default KeyWide;
export { KeyWide };
