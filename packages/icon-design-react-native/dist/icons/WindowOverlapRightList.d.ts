import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowOverlapRightListProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowOverlapRightList: ForwardRefExoticComponent<WindowOverlapRightListProps & RefAttributes<Svg>>;

export default WindowOverlapRightList;
export { WindowOverlapRightList };
