import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IInformation42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IInformation42: ForwardRefExoticComponent<IInformation42Props & RefAttributes<SVGSVGElement>>;

export default IInformation42;
export { IInformation42 };
