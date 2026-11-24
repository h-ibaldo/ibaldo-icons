import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CubeFocusSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CubeFocusSmall: ForwardRefExoticComponent<CubeFocusSmallProps & RefAttributes<Svg>>;

export default CubeFocusSmall;
export { CubeFocusSmall };
