import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudRefreshCornerTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudRefreshCornerTall: ForwardRefExoticComponent<CloudRefreshCornerTallProps & RefAttributes<Svg>>;

export default CloudRefreshCornerTall;
export { CloudRefreshCornerTall };
