import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodePlus: ForwardRefExoticComponent<CodePlusProps & RefAttributes<SVGSVGElement>>;

export default CodePlus;
export { CodePlus };
