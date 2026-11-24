import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchRockerOffPerspectiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchRockerOffPerspective: ForwardRefExoticComponent<SwitchRockerOffPerspectiveProps & RefAttributes<Svg>>;

export default SwitchRockerOffPerspective;
export { SwitchRockerOffPerspective };
