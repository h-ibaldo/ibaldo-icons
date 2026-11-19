import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveMinus: ForwardRefExoticComponent<SaveMinusProps & RefAttributes<Svg>>;

export default SaveMinus;
export { SaveMinus };
