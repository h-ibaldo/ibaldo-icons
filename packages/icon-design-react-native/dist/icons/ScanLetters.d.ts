import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanLettersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanLetters: ForwardRefExoticComponent<ScanLettersProps & RefAttributes<Svg>>;

export default ScanLetters;
export { ScanLetters };
