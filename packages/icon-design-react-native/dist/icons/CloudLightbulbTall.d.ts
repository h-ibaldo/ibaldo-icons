import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLightbulbTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLightbulbTall: ForwardRefExoticComponent<CloudLightbulbTallProps & RefAttributes<Svg>>;

export default CloudLightbulbTall;
export { CloudLightbulbTall };
