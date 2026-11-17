import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeSlashSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeSlashSmall: ForwardRefExoticComponent<CodeSlashSmallProps & RefAttributes<SVGSVGElement>>;

export default CodeSlashSmall;
export { CodeSlashSmall };
