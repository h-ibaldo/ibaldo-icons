import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotebookSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotebookSharp: ForwardRefExoticComponent<NotebookSharpProps & RefAttributes<SVGSVGElement>>;

export default NotebookSharp;
export { NotebookSharp };
