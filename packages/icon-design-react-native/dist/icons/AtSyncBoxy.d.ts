import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtSyncBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtSyncBoxy: ForwardRefExoticComponent<AtSyncBoxyProps & RefAttributes<Svg>>;

export default AtSyncBoxy;
export { AtSyncBoxy };
