import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeX: ForwardRefExoticComponent<CodeXProps & RefAttributes<SVGSVGElement>>;

export default CodeX;
export { CodeX };
