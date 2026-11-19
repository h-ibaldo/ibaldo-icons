import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NotebookSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NotebookSharp: ForwardRefExoticComponent<NotebookSharpProps & RefAttributes<Svg>>;

export default NotebookSharp;
export { NotebookSharp };
