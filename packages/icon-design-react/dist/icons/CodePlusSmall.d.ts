import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodePlusSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodePlusSmall: ForwardRefExoticComponent<CodePlusSmallProps & RefAttributes<SVGSVGElement>>;

export default CodePlusSmall;
export { CodePlusSmall };
