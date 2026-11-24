import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotebookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Notebook: ForwardRefExoticComponent<NotebookProps & RefAttributes<SVGSVGElement>>;

export default Notebook;
export { Notebook };
