import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotebookInfoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotebookInfo: ForwardRefExoticComponent<NotebookInfoProps & RefAttributes<Svg>>;

export default NotebookInfo;
export { NotebookInfo };
