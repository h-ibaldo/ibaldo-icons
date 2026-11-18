import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeSlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeSlash: ForwardRefExoticComponent<CodeSlashProps & RefAttributes<SVGSVGElement>>;

export default CodeSlash;
export { CodeSlash };
