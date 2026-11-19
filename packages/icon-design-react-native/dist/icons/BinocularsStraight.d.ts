import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsStraight: ForwardRefExoticComponent<BinocularsStraightProps & RefAttributes<Svg>>;

export default BinocularsStraight;
export { BinocularsStraight };
