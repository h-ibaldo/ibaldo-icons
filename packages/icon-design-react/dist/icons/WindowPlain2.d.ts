import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlain2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlain2: ForwardRefExoticComponent<WindowPlain2Props & RefAttributes<SVGSVGElement>>;

export default WindowPlain2;
export { WindowPlain2 };
