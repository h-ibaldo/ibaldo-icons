import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformationCircle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformationCircle1: ForwardRefExoticComponent<IInformationCircle1Props & RefAttributes<SVGSVGElement>>;

export default IInformationCircle1;
export { IInformationCircle1 };
