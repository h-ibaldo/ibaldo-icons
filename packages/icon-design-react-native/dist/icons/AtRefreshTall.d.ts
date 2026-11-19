import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtRefreshTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtRefreshTall: ForwardRefExoticComponent<AtRefreshTallProps & RefAttributes<Svg>>;

export default AtRefreshTall;
export { AtRefreshTall };
