import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text3DHexagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text3DHexagon: ForwardRefExoticComponent<Text3DHexagonProps & RefAttributes<Svg>>;

export default Text3DHexagon;
export { Text3DHexagon };
