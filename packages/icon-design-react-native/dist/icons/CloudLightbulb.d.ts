import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLightbulbProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLightbulb: ForwardRefExoticComponent<CloudLightbulbProps & RefAttributes<Svg>>;

export default CloudLightbulb;
export { CloudLightbulb };
