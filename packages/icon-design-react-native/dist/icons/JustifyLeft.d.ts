import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface JustifyLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const JustifyLeft: ForwardRefExoticComponent<JustifyLeftProps & RefAttributes<Svg>>;

export default JustifyLeft;
export { JustifyLeft };
