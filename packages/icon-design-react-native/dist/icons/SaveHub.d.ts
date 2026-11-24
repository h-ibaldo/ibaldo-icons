import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveHubProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveHub: ForwardRefExoticComponent<SaveHubProps & RefAttributes<Svg>>;

export default SaveHub;
export { SaveHub };
