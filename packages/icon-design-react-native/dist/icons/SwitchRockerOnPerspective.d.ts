import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchRockerOnPerspectiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchRockerOnPerspective: ForwardRefExoticComponent<SwitchRockerOnPerspectiveProps & RefAttributes<Svg>>;

export default SwitchRockerOnPerspective;
export { SwitchRockerOnPerspective };
