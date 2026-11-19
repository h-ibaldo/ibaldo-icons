import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsBoxy: ForwardRefExoticComponent<BinocularsBoxyProps & RefAttributes<Svg>>;

export default BinocularsBoxy;
export { BinocularsBoxy };
