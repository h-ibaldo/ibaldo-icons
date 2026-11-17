import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Code: ForwardRefExoticComponent<CodeProps & RefAttributes<SVGSVGElement>>;

export default Code;
export { Code };
