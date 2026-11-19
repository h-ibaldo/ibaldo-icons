import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsTall: ForwardRefExoticComponent<BinocularsTallProps & RefAttributes<Svg>>;

export default BinocularsTall;
export { BinocularsTall };
