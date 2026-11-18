import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeMinus: ForwardRefExoticComponent<CodeMinusProps & RefAttributes<SVGSVGElement>>;

export default CodeMinus;
export { CodeMinus };
