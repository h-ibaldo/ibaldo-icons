import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtRefreshBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtRefreshBoxy: ForwardRefExoticComponent<AtRefreshBoxyProps & RefAttributes<Svg>>;

export default AtRefreshBoxy;
export { AtRefreshBoxy };
