import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface KeypadGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const KeypadGrid: ForwardRefExoticComponent<KeypadGridProps & RefAttributes<Svg>>;

export default KeypadGrid;
export { KeypadGrid };
