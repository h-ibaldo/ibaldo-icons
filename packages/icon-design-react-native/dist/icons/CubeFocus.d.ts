import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CubeFocusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CubeFocus: ForwardRefExoticComponent<CubeFocusProps & RefAttributes<Svg>>;

export default CubeFocus;
export { CubeFocus };
