import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface JustifyRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const JustifyRight: ForwardRefExoticComponent<JustifyRightProps & RefAttributes<Svg>>;

export default JustifyRight;
export { JustifyRight };
