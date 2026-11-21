import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChipLettersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChipLetters: ForwardRefExoticComponent<ChipLettersProps & RefAttributes<Svg>>;

export default ChipLetters;
export { ChipLetters };
