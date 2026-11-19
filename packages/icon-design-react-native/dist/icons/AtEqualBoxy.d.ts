import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtEqualBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtEqualBoxy: ForwardRefExoticComponent<AtEqualBoxyProps & RefAttributes<Svg>>;

export default AtEqualBoxy;
export { AtEqualBoxy };
