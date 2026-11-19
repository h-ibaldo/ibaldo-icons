import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Text3DHexagonSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Text3DHexagonSmall: ForwardRefExoticComponent<Text3DHexagonSmallProps & RefAttributes<Svg>>;

export default Text3DHexagonSmall;
export { Text3DHexagonSmall };
