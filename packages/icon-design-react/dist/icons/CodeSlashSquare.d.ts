import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeSlashSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeSlashSquare: ForwardRefExoticComponent<CodeSlashSquareProps & RefAttributes<SVGSVGElement>>;

export default CodeSlashSquare;
export { CodeSlashSquare };
