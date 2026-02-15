import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNews1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews1: ForwardRefExoticComponent<NewspaperNews1Props & RefAttributes<SVGSVGElement>>;

export default NewspaperNews1;
export { NewspaperNews1 };
