import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTriangleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTriangleRound: ForwardRefExoticComponent<CloudTriangleRoundProps & RefAttributes<Svg>>;

export default CloudTriangleRound;
export { CloudTriangleRound };
