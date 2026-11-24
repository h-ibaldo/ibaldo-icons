import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface JustifyTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const JustifyTop: ForwardRefExoticComponent<JustifyTopProps & RefAttributes<Svg>>;

export default JustifyTop;
export { JustifyTop };
