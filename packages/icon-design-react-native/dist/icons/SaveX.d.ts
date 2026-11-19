import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SaveXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SaveX: ForwardRefExoticComponent<SaveXProps & RefAttributes<Svg>>;

export default SaveX;
export { SaveX };
