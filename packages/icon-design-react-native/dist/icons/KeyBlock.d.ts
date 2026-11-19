import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeyBlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeyBlock: ForwardRefExoticComponent<KeyBlockProps & RefAttributes<Svg>>;

export default KeyBlock;
export { KeyBlock };
