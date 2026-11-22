import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UserStarWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UserStarWide: ForwardRefExoticComponent<UserStarWideProps & RefAttributes<Svg>>;

export default UserStarWide;
export { UserStarWide };
