import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RouterLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RouterLock: ForwardRefExoticComponent<RouterLockProps & RefAttributes<Svg>>;

export default RouterLock;
export { RouterLock };
