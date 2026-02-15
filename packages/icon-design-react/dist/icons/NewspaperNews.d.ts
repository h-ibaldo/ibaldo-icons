import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperNewsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperNews: ForwardRefExoticComponent<NewspaperNewsProps & RefAttributes<SVGSVGElement>>;

export default NewspaperNews;
export { NewspaperNews };
