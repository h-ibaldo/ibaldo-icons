import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformation1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformation1: ForwardRefExoticComponent<IInformation1Props & RefAttributes<SVGSVGElement>>;

export default IInformation1;
export { IInformation1 };
