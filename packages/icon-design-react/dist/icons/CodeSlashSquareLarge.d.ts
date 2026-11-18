import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeSlashSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeSlashSquareLarge: ForwardRefExoticComponent<CodeSlashSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default CodeSlashSquareLarge;
export { CodeSlashSquareLarge };
